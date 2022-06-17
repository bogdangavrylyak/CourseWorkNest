import { Module } from '@nestjs/common';
import { MaterialContractLandscapeWorkService } from './material-contract-landscape-work.service';
import { MaterialContractLandscapeWorkController } from './material-contract-landscape-work.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MaterialContractLandscapeWorkController],
  providers: [MaterialContractLandscapeWorkService, PrismaService],
})
export class MaterialContractLandscapeWorkModule {}
