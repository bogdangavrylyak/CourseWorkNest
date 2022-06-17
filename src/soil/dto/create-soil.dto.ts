import { ApiProperty } from '@nestjs/swagger';

export class CreateSoilDto {
  @ApiProperty()
  Soil: string;
}
