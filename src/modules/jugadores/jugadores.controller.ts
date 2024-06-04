import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateJugadorDto, UpdateJugadorDto } from 'src/shared/dtos';
import { JugadoresService } from './jugadores.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('jugadores')
@Controller('jugadores')
export class JugadoresController {
  constructor(private readonly jugadorService: JugadoresService) {}

  @Post()
  create(@Body() createJugadorDto: CreateJugadorDto) {
    return this.jugadorService.create(createJugadorDto);
  }

  @Get()
  findAll() {
    return this.jugadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.jugadorService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateJugadorDto: UpdateJugadorDto) {
    return this.jugadorService.update(id, updateJugadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.jugadorService.remove(id);
  }
}
