import { Module } from '@nestjs/common';
import { MaterialCharacteristicValueService } from './material-characteristic-value.service';
import { MaterialCharacteristicValueController } from './material-characteristic-value.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MaterialCharacteristicValueController],
  providers: [MaterialCharacteristicValueService, PrismaService],
})
export class MaterialCharacteristicValueModule {}
