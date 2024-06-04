import { Module } from '@nestjs/common';
import { ResultadosService } from './resultados.service';
import { ResultadosController } from './resultados.controller';

@Module({
  providers: [ResultadosService],
  controllers: [ResultadosController],
})
export class ResultadosModule {}
