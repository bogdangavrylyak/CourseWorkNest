import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderedMaterialDto {
  @ApiProperty()
  OrderRef: number;
  @ApiProperty()
  MaterialRef: number;
  @ApiProperty()
  Price: number;
  @ApiProperty()
  Count: number;
}
