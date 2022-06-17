import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CharacteristicValueService } from './characteristic_value.service';
import { CharacteristicValueController } from './characteristic_value.controller';

@Module({
  controllers: [CharacteristicValueController],
  providers: [CharacteristicValueService, PrismaService],
})
export class CharacteristicValueModule {}
