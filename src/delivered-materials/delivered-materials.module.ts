import { Module } from '@nestjs/common';
import { DeliveredMaterialsService } from './delivered-materials.service';
import { DeliveredMaterialsController } from './delivered-materials.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [DeliveredMaterialsController],
  providers: [DeliveredMaterialsService, PrismaService],
})
export class DeliveredMaterialsModule {}
