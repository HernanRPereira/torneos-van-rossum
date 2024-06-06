import { Module } from '@nestjs/common';
import { ResultadosService } from './resultados.service';
import { ResultadosController } from './resultados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resultado, Torneo } from 'src/shared/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Resultado, Torneo])],
  providers: [ResultadosService],
  controllers: [ResultadosController],
})
export class ResultadosModule {}
