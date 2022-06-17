import { ApiTags } from '@nestjs/swagger';
import { PositionService } from './position.service';
import { CreatePositionDto } from './dto/create-position.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('position')
@ApiTags('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Post()
  async create(@Body() createPositionDto: CreatePositionDto) {
    return await this.positionService.create(createPositionDto);
  }

  @Get()
  async findAll() {
    return await this.positionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.positionService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePositionDto: CreatePositionDto,
  ) {
    return await this.positionService.update(+id, updatePositionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.positionService.remove(+id);
  }
}
