import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MaterialService } from './material.service';
import { MaterialController } from './material.controller';

@Module({
  controllers: [MaterialController],
  providers: [MaterialService, PrismaService],
})
export class MaterialModule {}
