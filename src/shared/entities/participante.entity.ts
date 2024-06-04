import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Torneo } from './torneo.entity';
import { Jugador } from './jugador.entity';

@Entity()
export class Participante {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Torneo, torneo => torneo.id)
  torneo: Torneo;

  @ManyToOne(() => Jugador, jugador => jugador.id)
  jugador: Jugador;
}