import { ApiTags } from '@nestjs/swagger';
import { MaterialTypeService } from './material_type.service';
import { CreateMaterialTypeDto } from './dto/create-material_type.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('material-type')
@ApiTags('materialtypes')
export class MaterialTypeController {
  constructor(private readonly materialTypeService: MaterialTypeService) {}

  @Post()
  async create(@Body() createMaterialTypeDto: CreateMaterialTypeDto) {
    return await this.materialTypeService.create(createMaterialTypeDto);
  }

  @Get()
  async findAll() {
    return await this.materialTypeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.materialTypeService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMaterialTypeDto: CreateMaterialTypeDto,
  ) {
    return await this.materialTypeService.update(+id, updateMaterialTypeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.materialTypeService.remove(+id);
  }
}
