import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MaterialCharacteristicValueService } from './material-characteristic-value.service';
import { CreateMaterialCharacteristicValueDto } from './dto/create-material-characteristic-value.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('material-characteristic-value')
@ApiTags('material-characteristic-value')
export class MaterialCharacteristicValueController {
  constructor(
    private readonly materialCharacteristicValueService: MaterialCharacteristicValueService,
  ) {}

  @Post()
  async create(
    @Body()
    createMaterialCharacteristicValueDto: CreateMaterialCharacteristicValueDto,
  ) {
    return await this.materialCharacteristicValueService.create(
      createMaterialCharacteristicValueDto,
    );
  }

  @Get()
  async findAll() {
    return await this.materialCharacteristicValueService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.materialCharacteristicValueService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body()
    updateMaterialCharacteristicValueDto: CreateMaterialCharacteristicValueDto,
  ) {
    return await this.materialCharacteristicValueService.update(
      +id,
      updateMaterialCharacteristicValueDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.materialCharacteristicValueService.remove(+id);
  }
}
