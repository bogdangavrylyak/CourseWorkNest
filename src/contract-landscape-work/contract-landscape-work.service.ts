import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateContractLandscapeWorkDto } from './dto/create-contract-landscape-work.dto';

@Injectable()
export class ContractLandscapeWorkService {
  constructor(private prisma: PrismaService) {}
  async create(createContractLandscapeWorkDto: CreateContractLandscapeWorkDto) {
    return await this.prisma.contractLandscapeWork.create({
      data: createContractLandscapeWorkDto,
    });
  }

  async findAll() {
    return await this.prisma.contractLandscapeWork.findMany({
      include: {
        Contract: true,
        LandscapeWork: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.contractLandscapeWork.findUnique({
      where: {
        ContractLandscapeWork_id: id,
      },
      include: {
        Contract: true,
        LandscapeWork: true,
      },
    });
  }

  async update(
    id: number,
    updateContractLandscapeWorkDto: CreateContractLandscapeWorkDto,
  ) {
    return await this.prisma.contractLandscapeWork.update({
      where: {
        ContractLandscapeWork_id: id,
      },
      data: updateContractLandscapeWorkDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.contractLandscapeWork.delete({
      where: {
        ContractLandscapeWork_id: id,
      },
    });
  }
}
