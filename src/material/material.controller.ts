import { ApiTags } from '@nestjs/swagger';
import { MaterialService } from './material.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('material')
@ApiTags('materials')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Post()
  async create(@Body() createMaterialDto: CreateMaterialDto) {
    return await this.materialService.create(createMaterialDto);
  }

  @Get()
  async findAll() {
    return await this.materialService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.materialService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMaterialDto: CreateMaterialDto,
  ) {
    return await this.materialService.update(+id, updateMaterialDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.materialService.remove(+id);
  }
}
