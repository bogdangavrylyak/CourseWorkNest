import { ApiProperty } from '@nestjs/swagger';

export class CreateContractDto {
  @ApiProperty()
  ContractNumber: string;
  @ApiProperty()
  Price: number;
  @ApiProperty()
  Deadline: string;
  @ApiProperty()
  IsDone: boolean;
  @ApiProperty()
  CustomerRef: number;
  @ApiProperty()
  EmployeeRef: number;
  @ApiProperty()
  AddressRef: number;
}

// @ApiProperty()
// LandscapeWorkRef: number;
// @ApiProperty()
// LandscapeWorkCount: number;
// @ApiProperty()
// MaterialRef: number;
// @ApiProperty()
// MaterialCount: number;
