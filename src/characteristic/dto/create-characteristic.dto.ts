import { ApiProperty } from '@nestjs/swagger';

export class CreateCharacteristicDto {
  @ApiProperty()
  haracteristic: string;
}
