import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const parsed = parseInt(value, 10)
    if (isNaN(parsed)) {
      throw new BadRequestException("Validation failed")
    }
    return parsed
  }
}
