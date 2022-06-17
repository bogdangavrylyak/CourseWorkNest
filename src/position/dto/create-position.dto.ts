import { ApiProperty } from '@nestjs/swagger';

export class CreatePositionDto {
  @ApiProperty()
  Position: string;
}
