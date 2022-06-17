import { ApiProperty } from '@nestjs/swagger';

export class CreateCharacteristicValueDto {
  @ApiProperty()
  CharacteristicValue: string;
  @ApiProperty()
  CharacteristicRef: number;
}
