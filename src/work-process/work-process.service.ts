import { Injectable } from '@nestjs/common';
import { CreateWorkProcessDto } from './dto/create-work-process.dto';
import { PrismaService } from '../prisma.service';
import { WorkProcess } from '@prisma/client';

@Injectable()
export class WorkProcessService {
  constructor(private prisma: PrismaService) {}
  async create(
    createWorkProcessDto: CreateWorkProcessDto,
  ): Promise<WorkProcess> {
    const workProcess = await this.prisma.workProcess.create({
      data: {
        BeginDate: createWorkProcessDto.BeginDate,
        EndDate: createWorkProcessDto.EndDate,
        Description: createWorkProcessDto.Description,
        StatusRef: createWorkProcessDto.StatusRef,
        LandscapeWorkRef: createWorkProcessDto.LandscapeWorkRef,
      },
    });

    return workProcess;
  }

  async findAll() {
    return await this.prisma.workProcess.findMany({
      include: {
        // WorkProcessMaterial: {
        //   include: {
        //     DeliveredMaterials: {
        //       include: {
        //         OrderedMaterials: {
        //           include: {
        //             Material: true,
        //           },
        //         },
        //       },
        //     },
        //   },
        // },
        Status: true,
        LandscapeWork: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.workProcess.findUnique({
      where: {
        WorkProcess_id: id,
      },
      include: {
        // WorkProcessMaterial: true,
        // {
        //   include: {
        //     DeliveredMaterials: {
        //       include: {
        //         OrderedMaterials: {
        //           include: {
        //             Material: true,
        //           },
        //         },
        //       },
        //     },
        //   },
        // },
        LandscapeWork: true,
      },
    });
  }

  async update(id: number, updateWorkProcessDto: CreateWorkProcessDto) {
    return await this.prisma.workProcess.update({
      where: {
        WorkProcess_id: id,
      },
      data: {
        BeginDate: updateWorkProcessDto.BeginDate,
        EndDate: updateWorkProcessDto.EndDate,
        Description: updateWorkProcessDto.Description,
        StatusRef: updateWorkProcessDto.StatusRef,
        LandscapeWorkRef: updateWorkProcessDto.LandscapeWorkRef,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.workProcess.delete({
      where: {
        WorkProcess_id: id,
      },
    });
  }
}

// await this.prisma.workProcessEmployee.create({
//   data: {
//     WorkProcess_id: workProcess.WorkProcess_id,
//     Employee_id: createWorkProcessDto.EmployeeRef,
//   },
// });

// await this.prisma.workProcessMaterial.create({
//   data: {
//     DeliveredMaterials_id: createWorkProcessDto.DeliveredMaterialsRef,
//     WorkProcess_id: workProcess.WorkProcess_id,
//     Count: createWorkProcessDto.DeliveredMaterialsCount,
//   },
// });

// const workProcessMaterial = await this.prisma.workProcessMaterial.findFirst(
//   {
//     where: {
//       WorkProcess_id: id,
//     },
//   },
// );

// await this.prisma.workProcessMaterial.delete({
//   where: {
//     WorkProcessMaterial_id: workProcessMaterial.WorkProcessMaterial_id,
//   },
// });

// await this.prisma.workProcessEmployee.delete({
//   where: {
//     WorkProcess_id: id,
//   },
// });

// WorkProcessEmployee: {
//   include: {
//     Employee: {
//       include: {
//         Position: true,
//         Department: true,
//       },
//     },
//   },
// },

// WorkProcessEmployee: {
//   include: {
//     Employee: {
//       include: {
//         Position: true,
//         Department: true,
//       },
//     },
//   },
// },
