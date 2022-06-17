import { ApiProperty } from '@nestjs/swagger';

export class CreateDepartmentDto {
  @ApiProperty()
  DepartmentName: string;
  @ApiProperty()
  AddressRef: number;
}
