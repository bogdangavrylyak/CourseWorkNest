import { ApiTags } from '@nestjs/swagger';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { AuthDto } from './dto/auth.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('employee')
@ApiTags('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('auth')
  async auth(@Body() authDto: AuthDto) {
    return await this.employeeService.auth(authDto);
  }

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return await this.employeeService.create(createEmployeeDto);
  }

  @Get()
  async findAll() {
    return await this.employeeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.employeeService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: CreateEmployeeDto,
  ) {
    return await this.employeeService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.employeeService.remove(+id);
  }
}
