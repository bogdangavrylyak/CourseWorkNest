import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty()
  Name: string;
  @ApiProperty()
  Surname: string;
  @ApiProperty()
  Phone: string;
}
