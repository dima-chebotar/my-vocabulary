import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { ResponseDto } from './data/response.dto';
import { ResponseTypeEnum } from './data/response.type.enum';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpErrorFilter.name);

  catch(exception: Error, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const message =
      exception instanceof HttpException
        ? exception.message
        : 'Internal server error';

    const responseDto = new ResponseDto(ResponseTypeEnum.Error, message);
    this.logger.error(
      `
      method: ${request.method}
      url: ${request.url}
      error name: ${exception?.name}
      message: ${exception?.message}
      timestamp: ${new Date().toISOString()}
      `,
    );
    response.status(statusCode).json(responseDto);
  }
}
