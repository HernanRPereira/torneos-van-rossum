import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateTorneoDto, UpdateTorneoDto } from 'src/shared/dtos';
import { TorneosService } from './torneos.service';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('torneos')
@Controller('torneos')
export class TorneosController {
  constructor(private readonly torneoService: TorneosService) {}

  @Post()
  @ApiBody({ type: CreateTorneoDto })
  create(@Body() createTorneoDto: CreateTorneoDto) {
    return this.torneoService.create(createTorneoDto);
  }

  @Get()
  @ApiQuery({ name: 'jugadorId', required: false })
  @ApiQuery({ name: 'title', required: false })
  findAll(
    @Query('jugadorId') jugadorId?: number,
    @Query('title') title?: string,
  ) {
    if (jugadorId) {
      return this.torneoService.findByjugador(jugadorId);
    } else if (title) {
      return this.torneoService.findByTitle(title);
    } else {
      return this.torneoService.findAll();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.torneoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateTorneoDto: UpdateTorneoDto) {
    return this.torneoService.update(id, updateTorneoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.torneoService.remove(id);
  }

  @Delete('delete/:id')
  deleteOne(@Param('id') id: number) {
    return this.torneoService.deleteOne(id);
  }
}
