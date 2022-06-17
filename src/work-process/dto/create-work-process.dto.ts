import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkProcessDto {
  @ApiProperty()
  BeginDate: string;
  @ApiProperty()
  EndDate: string;
  @ApiProperty()
  Description: string;
  @ApiProperty()
  StatusRef: number;
  @ApiProperty()
  LandscapeWorkRef: number;
  // @ApiProperty()
  // DeliveredMaterialsRef: number;
  // @ApiProperty()
  // DeliveredMaterialsCount: number;
  // @ApiProperty()
  // EmployeeRef: number;
}
