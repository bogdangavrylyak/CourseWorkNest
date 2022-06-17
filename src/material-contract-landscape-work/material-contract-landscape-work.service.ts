import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MaterialContractLandscapeWork } from '@prisma/client';
import { CreateMaterialContractLandscapeWorkDto } from './dto/create-material-contract-landscape-work.dto';

@Injectable()
export class MaterialContractLandscapeWorkService {
  constructor(private prisma: PrismaService) {}
  async create(
    createMaterialContractLandscapeWorkDto: CreateMaterialContractLandscapeWorkDto,
  ): Promise<MaterialContractLandscapeWork> {
    return await this.prisma.materialContractLandscapeWork.create({
      data: createMaterialContractLandscapeWorkDto,
    });
  }

  async findAll() {
    const dbData = await this.prisma.materialContractLandscapeWork.findMany({
      include: {
        LandscapeWork: true,
        Material: true,
      },
    });

    return dbData.map((el) => ({
      ...el,
      ...el.Material,
      ...el.LandscapeWork,
    }));
  }

  async findOne(id: number) {
    return await this.prisma.materialContractLandscapeWork.findUnique({
      where: {
        MaterialContractLandscapeWork_id: id,
      },
      include: {
        LandscapeWork: true,
        Material: true,
      },
    });
  }

  async update(
    id: number,
    updateMaterialContractLandscapeWorkDto: CreateMaterialContractLandscapeWorkDto,
  ) {
    return await this.prisma.materialContractLandscapeWork.update({
      where: {
        MaterialContractLandscapeWork_id: id,
      },
      data: updateMaterialContractLandscapeWorkDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.materialContractLandscapeWork.delete({
      where: {
        MaterialContractLandscapeWork_id: id,
      },
    });
  }
}
