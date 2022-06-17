import { Module } from '@nestjs/common';
import { OrderedMaterialsService } from './ordered-materials.service';
import { OrderedMaterialsController } from './ordered-materials.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [OrderedMaterialsController],
  providers: [OrderedMaterialsService, PrismaService],
})
export class OrderedMaterialsModule {}
