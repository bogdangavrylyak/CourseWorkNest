import { ApiTags } from '@nestjs/swagger';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('department')
@ApiTags('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  async create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return await this.departmentService.create(createDepartmentDto);
  }

  @Get()
  async findAll() {
    return await this.departmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.departmentService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDepartmentDto: CreateDepartmentDto,
  ) {
    return await this.departmentService.update(+id, updateDepartmentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.departmentService.remove(+id);
  }
}
