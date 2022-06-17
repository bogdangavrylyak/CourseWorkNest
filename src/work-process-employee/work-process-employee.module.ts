import { Module } from '@nestjs/common';
import { WorkProcessEmployeeService } from './work-process-employee.service';
import { WorkProcessEmployeeController } from './work-process-employee.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [WorkProcessEmployeeController],
  providers: [WorkProcessEmployeeService, PrismaService],
})
export class WorkProcessEmployeeModule {}
