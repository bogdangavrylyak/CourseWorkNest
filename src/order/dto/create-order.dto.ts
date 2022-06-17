import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  OrderNumber: string;
  @ApiProperty()
  DateOfOrder: string;
  @ApiProperty()
  Deadline: string;
  @ApiProperty()
  TotalPrice: number;
  @ApiProperty()
  CompanySupplierRef: number;
  @ApiProperty()
  EmployeeRef: number;
}
