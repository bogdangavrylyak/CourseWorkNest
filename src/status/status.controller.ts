import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { ApiTags } from "@nestjs/swagger";

@Controller('status')
@ApiTags('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post()
  async create(@Body() createStatusDto: CreateStatusDto) {
    return await this.statusService.create(createStatusDto);
  }

  @Get()
  async findAll() {
    return await this.statusService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.statusService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateStatusDto: CreateStatusDto) {
    return await this.statusService.update(+id, updateStatusDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.statusService.remove(+id);
  }
}
