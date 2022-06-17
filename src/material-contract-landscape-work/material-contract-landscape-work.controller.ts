import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MaterialContractLandscapeWorkService } from './material-contract-landscape-work.service';
import { CreateMaterialContractLandscapeWorkDto } from './dto/create-material-contract-landscape-work.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('material-contract-landscape-work')
@ApiTags('material-contract-landscape-work')
export class MaterialContractLandscapeWorkController {
  constructor(
    private readonly materialContractLandscapeWorkService: MaterialContractLandscapeWorkService,
  ) {}

  @Post()
  async create(
    @Body()
    createMaterialContractLandscapeWorkDto: CreateMaterialContractLandscapeWorkDto,
  ) {
    return await this.materialContractLandscapeWorkService.create(
      createMaterialContractLandscapeWorkDto,
    );
  }

  @Get()
  async findAll() {
    return await this.materialContractLandscapeWorkService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.materialContractLandscapeWorkService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body()
    updateMaterialContractLandscapeWorkDto: CreateMaterialContractLandscapeWorkDto,
  ) {
    return await this.materialContractLandscapeWorkService.update(
      +id,
      updateMaterialContractLandscapeWorkDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.materialContractLandscapeWorkService.remove(+id);
  }
}
