import { ApiTags } from '@nestjs/swagger';
import { DeliveredMaterialsService } from './delivered-materials.service';
import { CreateDeliveredMaterialDto } from './dto/create-delivered-material.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('delivered-materials')
@ApiTags('delivered-materials')
export class DeliveredMaterialsController {
  constructor(
    private readonly deliveredMaterialsService: DeliveredMaterialsService,
  ) {}

  @Post()
  async create(@Body() createDeliveredMaterialDto: CreateDeliveredMaterialDto) {
    return await this.deliveredMaterialsService.create(
      createDeliveredMaterialDto,
    );
  }

  @Get()
  async findAll() {
    return await this.deliveredMaterialsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.deliveredMaterialsService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDeliveredMaterialDto: CreateDeliveredMaterialDto,
  ) {
    return await this.deliveredMaterialsService.update(
      +id,
      updateDeliveredMaterialDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.deliveredMaterialsService.remove(+id);
  }
}
