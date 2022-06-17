import { ApiTags } from '@nestjs/swagger';
import { ContractService } from './contract.service';
import { CreateContractDto } from './dto/create-contract.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('contract')
@ApiTags('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  async create(@Body() createContractDto: CreateContractDto) {
    return await this.contractService.create(createContractDto);
  }

  @Get()
  async findAll() {
    return await this.contractService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.contractService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateContractDto: CreateContractDto) {
    return await this.contractService.update(+id, updateContractDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.contractService.remove(+id);
  }
}
