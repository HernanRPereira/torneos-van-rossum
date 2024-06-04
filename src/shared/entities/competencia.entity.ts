import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Torneo } from './torneo.entity';
import { Jugador } from './jugador.entity';

@Entity()
export class Competencia {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Torneo, (torneo) => torneo.id)
  torneo: Torneo;

  @ManyToOne(() => Jugador, (jugador) => jugador.id)
  jugador1: Jugador;

  @ManyToOne(() => Jugador, (jugador) => jugador.id)
  jugador2: Jugador;

  @Column()
  fecha: string;
}
