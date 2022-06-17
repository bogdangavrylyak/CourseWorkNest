import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CharacteristicService } from './characteristic.service';
import { CharacteristicController } from './characteristic.controller';

@Module({
  controllers: [CharacteristicController],
  providers: [CharacteristicService, PrismaService],
})
export class CharacteristicModule {}
