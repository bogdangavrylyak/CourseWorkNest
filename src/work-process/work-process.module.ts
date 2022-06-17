import { Module } from '@nestjs/common';
import { WorkProcessService } from './work-process.service';
import { WorkProcessController } from './work-process.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [WorkProcessController],
  providers: [WorkProcessService, PrismaService],
})
export class WorkProcessModule {}
