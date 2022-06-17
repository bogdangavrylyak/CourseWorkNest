import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { Contract } from '@prisma/client';

@Injectable()
export class ContractService {
  constructor(private prisma: PrismaService) {}
  async create(createContractDto: CreateContractDto): Promise<Contract> {
    const contract = await this.prisma.contract.create({
      data: {
        Price: createContractDto.Price,
        Deadline: createContractDto.Deadline,
        IsDone: createContractDto.IsDone,
        CustomerRef: createContractDto.CustomerRef,
        EmployeeRef: createContractDto.EmployeeRef,
        AddressRef: createContractDto.AddressRef,
        ContractNumber: createContractDto.ContractNumber,
      },
    });

    return contract;
  }

  async findAll() {
    return await this.prisma.contract.findMany({
      include: {
        Customer: true,
        Address: {
          include: {
            City: true,
          },
        },
        Employee: {
          include: {
            Department: true,
          },
        },
        ContractLandscapeWork: {
          include: {
            LandscapeWork: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.contract.findUnique({
      where: {
        Contract_id: id,
      },
      include: {
        Customer: true,
        Address: {
          include: {
            City: true,
          },
        },
        Employee: {
          include: {
            Department: true,
          },
        },
        ContractLandscapeWork: {
          include: {
            LandscapeWork: true,
          },
        },
      },
    });
  }

  async update(id: number, updateContractDto: CreateContractDto) {
    return await this.prisma.contract.update({
      where: {
        Contract_id: id,
      },
      data: {
        ContractNumber: updateContractDto.ContractNumber,
        Price: updateContractDto.Price,
        Deadline: updateContractDto.Deadline,
        IsDone: updateContractDto.IsDone,
        CustomerRef: updateContractDto.CustomerRef,
        EmployeeRef: updateContractDto.EmployeeRef,
        AddressRef: updateContractDto.AddressRef,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.contract.delete({
      where: {
        Contract_id: id,
      },
    });
  }
}

// const contractLandscapeWork =
//   await this.prisma.contractLandscapeWork.create({
//     data: {
//       LandscapeWorkRef: createContractDto.LandscapeWorkRef,
//       ContractRef: contract.Contract_id,
//       Count: createContractDto.LandscapeWorkCount,
//     },
//   });

// await this.prisma.materialContractLandscapeWork.create({
//   data: {
//     MaterialRef: createContractDto.MaterialRef,
//     ContractLandscapeWorkRef:
//       contractLandscapeWork.ContractLandscapeWork_id,
//     Count: createContractDto.MaterialCount,
//   },
// });

// const contractLandscapeWork =
//   await this.prisma.contractLandscapeWork.findFirst({
//     where: {
//       ContractRef: id,
//     },
//   });

// const materialContractLandscapeWork =
//   await this.prisma.materialContractLandscapeWork.findFirst({
//     where: {
//       ContractLandscapeWorkRef:
//         contractLandscapeWork.ContractLandscapeWork_id,
//     },
//   });

// await this.prisma.materialContractLandscapeWork.delete({
//   where: {
//     MaterialContractLandscapeWork_id:
//       materialContractLandscapeWork.MaterialContractLandscapeWork_id,
//   },
// });

// await this.prisma.contractLandscapeWork.delete({
//   where: {
//     ContractLandscapeWork_id:
//       contractLandscapeWork.ContractLandscapeWork_id,
//   },
// });
