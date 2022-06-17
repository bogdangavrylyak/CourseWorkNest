import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorkProcessMaterialService } from './work-process-material.service';
import { CreateWorkProcessMaterialDto } from './dto/create-work-process-material.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('work-process-material')
@ApiTags('work-process-material')
export class WorkProcessMaterialController {
  constructor(
    private readonly workProcessMaterialService: WorkProcessMaterialService,
  ) {}

  @Post()
  async create(
    @Body() createWorkProcessMaterialDto: CreateWorkProcessMaterialDto,
  ) {
    return await this.workProcessMaterialService.create(
      createWorkProcessMaterialDto,
    );
  }

  @Get()
  async findAll() {
    return await this.workProcessMaterialService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.workProcessMaterialService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWorkProcessMaterialDto: CreateWorkProcessMaterialDto,
  ) {
    return await this.workProcessMaterialService.update(
      +id,
      updateWorkProcessMaterialDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.workProcessMaterialService.remove(+id);
  }
}
