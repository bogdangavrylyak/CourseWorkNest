import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('customer')
@ApiTags('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    return await this.customerService.create(createCustomerDto);
  }

  @Get()
  async findAll() {
    return await this.customerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.customerService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDto: CreateCustomerDto,
  ) {
    return await this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.customerService.remove(+id);
  }
}
