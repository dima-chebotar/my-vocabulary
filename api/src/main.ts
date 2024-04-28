import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import { Environment } from './common/env.validation';
import { HttpErrorFilter } from './common/http-exception.filter';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api/v1');
  app.useGlobalFilters(new HttpErrorFilter());

  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);

  const port = configService.get<number>('APP_PORT', 3000);
  const env = configService.get<string>('NODE_ENV');

  if (env === Environment.Production) {
    app.use(helmet());
    app.enableCors();
  }

  await app.listen(port);

  const logger = new Logger(bootstrap.name.toUpperCase());
  const url = await app.getUrl();
  logger.log(`Application is running on: ${url}`);
}

bootstrap().then();
