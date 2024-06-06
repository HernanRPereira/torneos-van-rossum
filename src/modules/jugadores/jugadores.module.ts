import { Module } from '@nestjs/common';
import { JugadoresService } from './jugadores.service';
import { JugadoresController } from './jugadores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jugador } from 'src/shared/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Jugador])],
  providers: [JugadoresService],
  controllers: [JugadoresController],
})
export class JugadoresModule {}
