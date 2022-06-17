import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ContractLandscapeWorkService } from './contract-landscape-work.service';
import { CreateContractLandscapeWorkDto } from './dto/create-contract-landscape-work.dto';

@Controller('contract-landscape-work')
@ApiTags('contract-landscape-work')
export class ContractLandscapeWorkController {
  constructor(
    private readonly contractLandscapeWorkService: ContractLandscapeWorkService,
  ) {}

  @Post()
  async create(
    @Body() createContractLandscapeWorkDto: CreateContractLandscapeWorkDto,
  ) {
    return await this.contractLandscapeWorkService.create(
      createContractLandscapeWorkDto,
    );
  }

  @Get()
  async findAll() {
    return await this.contractLandscapeWorkService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.contractLandscapeWorkService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateContractLandscapeWorkDto: CreateContractLandscapeWorkDto,
  ) {
    return await this.contractLandscapeWorkService.update(
      +id,
      updateContractLandscapeWorkDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.contractLandscapeWorkService.remove(+id);
  }
}
