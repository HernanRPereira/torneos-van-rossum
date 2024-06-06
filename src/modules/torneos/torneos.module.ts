import { Module } from '@nestjs/common';
import { TorneosService } from './torneos.service';
import { TorneosController } from './torneos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jugador, Torneo } from 'src/shared/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Torneo, Jugador])],
  providers: [TorneosService],
  controllers: [TorneosController]
})
export class TorneosModule {}
