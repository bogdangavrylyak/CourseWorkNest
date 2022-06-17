import { ApiProperty } from '@nestjs/swagger';

export class CreateMaterialTypeDto {
  @ApiProperty()
  MaterialType: string;
}
