import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty()
  Address: string;
  @ApiProperty()
  CityRef: number;
}
