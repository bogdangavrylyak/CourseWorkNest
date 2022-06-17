import { ApiTags } from '@nestjs/swagger';
import { SortService } from './sort.service';
import { CreateSortDto } from './dto/create-sort.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('sort')
@ApiTags('sorts')
export class SortController {
  constructor(private readonly sortService: SortService) {}

  @Post()
  async create(@Body() createSortDto: CreateSortDto) {
    return await this.sortService.create(createSortDto);
  }

  @Get()
  async findAll() {
    return await this.sortService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.sortService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSortDto: CreateSortDto) {
    return await this.sortService.update(+id, updateSortDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.sortService.remove(+id);
  }
}
