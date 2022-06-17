import { ApiProperty } from '@nestjs/swagger';

export class CreateContractLandscapeWorkDto {
  @ApiProperty()
  LandscapeWorkRef: number;
  @ApiProperty()
  ContractRef: number;
  @ApiProperty()
  Count: number;
}
