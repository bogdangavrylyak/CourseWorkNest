import { ApiTags } from '@nestjs/swagger';
import { SoilService } from './soil.service';
import { CreateSoilDto } from './dto/create-soil.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('soil')
@ApiTags('soils')
export class SoilController {
  constructor(private readonly soilService: SoilService) {}

  @Post()
  async create(@Body() createSoilDto: CreateSoilDto) {
    return this.soilService.create(createSoilDto);
  }

  @Get()
  async findAll() {
    return this.soilService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.soilService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSoilDto: CreateSoilDto) {
    return this.soilService.update(+id, updateSoilDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.soilService.remove(+id);
  }
}
