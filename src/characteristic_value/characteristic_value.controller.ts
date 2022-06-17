import { ApiTags } from '@nestjs/swagger';
import { CharacteristicValueService } from './characteristic_value.service';
import { CreateCharacteristicValueDto } from './dto/create-characteristic_value.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('characteristic-value')
@ApiTags('characteristicvalues')
export class CharacteristicValueController {
  constructor(
    private readonly characteristicValueService: CharacteristicValueService,
  ) {}

  @Post()
  async create(
    @Body() createCharacteristicValueDto: CreateCharacteristicValueDto,
  ) {
    return await this.characteristicValueService.create(
      createCharacteristicValueDto,
    );
  }

  @Get()
  async findAll() {
    return await this.characteristicValueService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.characteristicValueService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCharacteristicValueDto: CreateCharacteristicValueDto,
  ) {
    return await this.characteristicValueService.update(
      +id,
      updateCharacteristicValueDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.characteristicValueService.remove(+id);
  }
}
