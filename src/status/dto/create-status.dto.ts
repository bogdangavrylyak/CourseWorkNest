import { ApiProperty } from '@nestjs/swagger';

export class CreateStatusDto {
  @ApiProperty()
  Status: string;
}
