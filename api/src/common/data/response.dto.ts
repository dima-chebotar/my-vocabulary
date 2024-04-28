import { ResponseTypeEnum } from './response.type.enum';

export class ResponseDto {
  type: ResponseTypeEnum;
  message: string;
  data?: string | number;
  constructor(type: ResponseTypeEnum, message: string, data?: string | number) {
    this.type = type;
    this.message = message;
    this.data = data;
  }
}
