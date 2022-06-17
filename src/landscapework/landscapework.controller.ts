import { ApiTags } from '@nestjs/swagger';
import { LandscapeworkService } from './landscapework.service';
import { CreateLandscapeworkDto } from './dto/create-landscapework.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('landscapework')
@ApiTags('landscapework')
export class LandscapeworkController {
  constructor(private readonly landscapeworkService: LandscapeworkService) {}

  @Post()
  async create(@Body() createLandscapeworkDto: CreateLandscapeworkDto) {
    return await this.landscapeworkService.create(createLandscapeworkDto);
  }

  @Get()
  async findAll() {
    return await this.landscapeworkService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.landscapeworkService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLandscapeworkDto: CreateLandscapeworkDto) {
    return await this.landscapeworkService.update(+id, updateLandscapeworkDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.landscapeworkService.remove(+id);
  }
}
