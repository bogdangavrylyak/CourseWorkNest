import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMaterialDto } from './dto/create-material.dto';

@Injectable()
export class MaterialService {
  constructor(private prisma: PrismaService) {}
  async create(createMaterialDto: CreateMaterialDto) {
    const material = await this.prisma.material.create({
      data: {
        Name: createMaterialDto.Name,
        Price: createMaterialDto.Price,
        TimeToGrow: createMaterialDto.TimeToGrow,
        WateringFrequency: createMaterialDto.WateringFrequency,
        BrightnessPreffered: createMaterialDto.BrightnessPreffered,
        SortRef: createMaterialDto.SortRef,
        SoilRef: createMaterialDto.SoilRef,
      },
    });
    // await this.prisma.materialCharacteristicValue.create({
    //   data: {
    //     Material_id: material.Material_id,
    //     CharacteristicValue_id: createMaterialDto.CharacteristicValueRef,
    //   },
    // });
    return material;
  }

  async findAll() {
    return await this.prisma.material.findMany({
      include: {
        Soil: true,
        Sort: {
          include: {
            MaterialType: true,
          },
        },
        MaterialCharacteristicValue: {
          include: {
            CharacteristicValue: {
              include: {
                haracteristic: true,
              },
            },
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.material.findUnique({
      where: {
        Material_id: id,
      },
      include: {
        Soil: true,
        Sort: {
          include: {
            MaterialType: true,
          },
        },
        MaterialCharacteristicValue: {
          include: {
            CharacteristicValue: {
              include: {
                haracteristic: true,
              },
            },
          },
        },
      },
    });
  }

  async update(id: number, updateMaterialDto: CreateMaterialDto) {
    const material = await this.prisma.material.update({
      where: {
        Material_id: id,
      },
      data: {
        Name: updateMaterialDto.Name,
        Price: updateMaterialDto.Price,
        TimeToGrow: updateMaterialDto.TimeToGrow,
        WateringFrequency: updateMaterialDto.WateringFrequency,
        BrightnessPreffered: updateMaterialDto.BrightnessPreffered,
        SortRef: updateMaterialDto.SortRef,
        SoilRef: updateMaterialDto.SoilRef,
      },
    });

    // await this.prisma.materialCharacteristicValue.update({
    //   where: {
    //     Material_id: id,
    //   },
    //   data: {
    //     Material_id: material.Material_id,
    //     CharacteristicValue_id: updateMaterialDto.CharacteristicValueRef,
    //   },
    // });
    return material;
  }

  async remove(id: number) {
    return await this.prisma.material.delete({
      where: {
        Material_id: id,
      },
    });
  }
}

// CharacteristicValue: {
//   where: {
//     CharacteristicValue_id: Material_id
//   }
// },
// Sort: {
//   include: {
//     MaterialType: true,
//   },
// },
