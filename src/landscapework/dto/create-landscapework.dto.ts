import { ApiProperty } from '@nestjs/swagger';

export class CreateLandscapeworkDto {
  @ApiProperty()
  LandscapeWork: string;
  @ApiProperty()
  Price: number;
  @ApiProperty()
  LandscapeWorkDescription: string;
}
