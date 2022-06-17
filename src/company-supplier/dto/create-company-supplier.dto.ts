import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanySupplierDto {
  @ApiProperty()
  Name: string;
  @ApiProperty()
  Email: string;
  @ApiProperty()
  BankAccount: string;
  @ApiProperty()
  AddressRef: number;
}
