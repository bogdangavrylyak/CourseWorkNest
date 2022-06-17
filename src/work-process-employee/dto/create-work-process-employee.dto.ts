import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkProcessEmployeeDto {
  @ApiProperty()
  WorkProcess_id: number;
  @ApiProperty()
  Employee_id: number;
}
