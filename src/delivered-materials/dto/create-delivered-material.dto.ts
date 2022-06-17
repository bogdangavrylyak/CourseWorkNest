import { ApiProperty } from '@nestjs/swagger';

export class CreateDeliveredMaterialDto {
  @ApiProperty()
  DeliveredCount: number;
  @ApiProperty()
  DeliveryDate: string;
  @ApiProperty()
  MaterialRef: number;
}
