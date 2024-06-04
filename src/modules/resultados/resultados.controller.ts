import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateResultadoDto, UpdateResultadoDto } from 'src/shared/dtos';
import { ResultadosService } from './resultados.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('resultados')
@Controller('resultados')
export class ResultadosController {
  constructor(private readonly resultadoService: ResultadosService) {}

  @Post()
  create(@Body() createResultadoDto: CreateResultadoDto) {
    return this.resultadoService.create(createResultadoDto);
  }

  @Get()
  findAll() {
    return this.resultadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.resultadoService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateResultadoDto: UpdateResultadoDto,
  ) {
    return this.resultadoService.update(id, updateResultadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.resultadoService.remove(id);
  }
}
