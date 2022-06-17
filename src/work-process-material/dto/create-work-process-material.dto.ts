import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkProcessMaterialDto {
  @ApiProperty()
  Count: number;
  @ApiProperty()
  WorkProcess_id: number;
  @ApiProperty()
  Material_id: number;
}
