import { Module } from '@nestjs/common';
import { LandscapeworkService } from './landscapework.service';
import { LandscapeworkController } from './landscapework.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [LandscapeworkController],
  providers: [LandscapeworkService, PrismaService],
})
export class LandscapeworkModule {}
