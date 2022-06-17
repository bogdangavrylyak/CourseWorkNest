import { ApiProperty } from '@nestjs/swagger';

export class CreateMaterialContractLandscapeWorkDto {
  @ApiProperty()
  MaterialRef: number;
  @ApiProperty()
  LandscapeWorkRef: number;
  @ApiProperty()
  Count: number;
}
