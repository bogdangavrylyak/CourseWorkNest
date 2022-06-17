import { ApiTags } from '@nestjs/swagger';
import { WorkProcessService } from './work-process.service';
import { CreateWorkProcessDto } from './dto/create-work-process.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('work-process')
@ApiTags('work-process')
export class WorkProcessController {
  constructor(private readonly workProcessService: WorkProcessService) {}

  @Post()
  async create(@Body() createWorkProcessDto: CreateWorkProcessDto) {
    return await this.workProcessService.create(createWorkProcessDto);
  }

  @Get()
  async findAll() {
    return await this.workProcessService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.workProcessService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWorkProcessDto: CreateWorkProcessDto,
  ) {
    return await this.workProcessService.update(+id, updateWorkProcessDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.workProcessService.remove(+id);
  }
}
