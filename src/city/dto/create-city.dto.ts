import { ApiProperty } from '@nestjs/swagger';

export class CreateCityDto {
  @ApiProperty()
  City: string;
}
