import { Module } from '@nestjs/common';
import { WorkProcessMaterialService } from './work-process-material.service';
import { WorkProcessMaterialController } from './work-process-material.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [WorkProcessMaterialController],
  providers: [WorkProcessMaterialService, PrismaService],
})
export class WorkProcessMaterialModule {}
