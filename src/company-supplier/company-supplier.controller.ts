import { ApiTags } from '@nestjs/swagger';
import { CompanySupplierService } from './company-supplier.service';
import { CreateCompanySupplierDto } from './dto/create-company-supplier.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('company-supplier')
@ApiTags('company-supplier')
export class CompanySupplierController {
  constructor(private readonly companySupplierService: CompanySupplierService) {}

  @Post()
  async create(@Body() createCompanySupplierDto: CreateCompanySupplierDto) {
    return await this.companySupplierService.create(createCompanySupplierDto);
  }

  @Get()
  async findAll() {
    return await this.companySupplierService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.companySupplierService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCompanySupplierDto: CreateCompanySupplierDto) {
    return await this.companySupplierService.update(+id, updateCompanySupplierDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.companySupplierService.remove(+id);
  }
}
