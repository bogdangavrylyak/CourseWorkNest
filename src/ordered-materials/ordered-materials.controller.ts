import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderedMaterialsService } from './ordered-materials.service';
import { CreateOrderedMaterialDto } from './dto/create-ordered-material.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('ordered-materials')
@ApiTags('ordered-materials')
export class OrderedMaterialsController {
  constructor(
    private readonly orderedMaterialsService: OrderedMaterialsService,
  ) {}

  @Post()
  async create(@Body() createOrderedMaterialDto: CreateOrderedMaterialDto) {
    return await this.orderedMaterialsService.create(createOrderedMaterialDto);
  }

  @Get()
  async findAll() {
    return await this.orderedMaterialsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.orderedMaterialsService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrderedMaterialDto: CreateOrderedMaterialDto,
  ) {
    return await this.orderedMaterialsService.update(
      +id,
      updateOrderedMaterialDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.orderedMaterialsService.remove(+id);
  }
}
