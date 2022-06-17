import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SortService } from './sort.service';
import { SortController } from './sort.controller';

@Module({
  controllers: [SortController],
  providers: [SortService, PrismaService],
})
export class SortModule {}
