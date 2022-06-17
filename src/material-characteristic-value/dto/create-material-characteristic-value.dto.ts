import { ApiProperty } from '@nestjs/swagger';

export class CreateMaterialCharacteristicValueDto {
  @ApiProperty()
  Material_id: number;
  @ApiProperty()
  CharacteristicValue_id: number;
}
