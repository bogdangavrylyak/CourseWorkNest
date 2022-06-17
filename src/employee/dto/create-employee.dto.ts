import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty()
  Name: string;
  @ApiProperty()
  Surname: string;
  @ApiProperty()
  Email: string;
  @ApiProperty()
  Password: string;
  @ApiProperty()
  PositionRef: number;
  @ApiProperty()
  DepartmentRef: number;
}
