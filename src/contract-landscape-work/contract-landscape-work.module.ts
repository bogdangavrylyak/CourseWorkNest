import { Module } from '@nestjs/common';
import { ContractLandscapeWorkService } from './contract-landscape-work.service';
import { ContractLandscapeWorkController } from './contract-landscape-work.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ContractLandscapeWorkController],
  providers: [ContractLandscapeWorkService, PrismaService],
})
export class ContractLandscapeWorkModule {}
