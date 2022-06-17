import { ApiProperty } from '@nestjs/swagger';

export class CreateMaterialDto {
  @ApiProperty()
  Name: string;
  @ApiProperty()
  Price: number;
  @ApiProperty()
  TimeToGrow: string;
  @ApiProperty()
  WateringFrequency: string;
  @ApiProperty()
  BrightnessPreffered: string;
  @ApiProperty()
  SortRef: number;
  @ApiProperty()
  SoilRef: number;
  @ApiProperty()
  CharacteristicValueRef: number;
}
