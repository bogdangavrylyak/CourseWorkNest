import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorkProcessEmployeeService } from './work-process-employee.service';
import { CreateWorkProcessEmployeeDto } from './dto/create-work-process-employee.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('work-process-employee')
@ApiTags('work-process-employee')
export class WorkProcessEmployeeController {
  constructor(
    private readonly workProcessEmployeeService: WorkProcessEmployeeService,
  ) {}

  @Post()
  async create(
    @Body() createWorkProcessEmployeeDto: CreateWorkProcessEmployeeDto,
  ) {
    return await this.workProcessEmployeeService.create(
      createWorkProcessEmployeeDto,
    );
  }

  @Get()
  async findAll() {
    return await this.workProcessEmployeeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.workProcessEmployeeService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWorkProcessEmployeeDto: CreateWorkProcessEmployeeDto,
  ) {
    return await this.workProcessEmployeeService.update(
      +id,
      updateWorkProcessEmployeeDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.workProcessEmployeeService.remove(+id);
  }
}
