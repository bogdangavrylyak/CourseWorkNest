import { ApiTags } from '@nestjs/swagger';
import { CharacteristicService } from './characteristic.service';
import { CreateCharacteristicDto } from './dto/create-characteristic.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('characteristic')
@ApiTags('characteristics')
export class CharacteristicController {
  constructor(private readonly characteristicService: CharacteristicService) {}

  @Post()
  async create(@Body() createCharacteristicDto: CreateCharacteristicDto) {
    return await this.characteristicService.create(createCharacteristicDto);
  }

  @Get()
  async findAll() {
    return await this.characteristicService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.characteristicService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCharacteristicDto: CreateCharacteristicDto,
  ) {
    return await this.characteristicService.update(
      +id,
      updateCharacteristicDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.characteristicService.remove(+id);
  }
}
