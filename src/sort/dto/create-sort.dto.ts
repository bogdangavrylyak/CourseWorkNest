import { ApiProperty } from '@nestjs/swagger';

export class CreateSortDto {
  @ApiProperty()
  Sort: string;
  @ApiProperty()
  MaterialTypeRef: number;
}
