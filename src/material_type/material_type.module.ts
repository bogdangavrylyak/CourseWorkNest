import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MaterialTypeService } from './material_type.service';
import { MaterialTypeController } from './material_type.controller';

@Module({
  controllers: [MaterialTypeController],
  providers: [MaterialTypeService, PrismaService],
})
export class MaterialTypeModule {}
