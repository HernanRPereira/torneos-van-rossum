import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Competencia } from './competencia.entity';
import { Jugador } from './jugador.entity';

@Entity()
export class Resultado {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Competencia, (competencia) => competencia.id)
  competencia: Competencia;

  @ManyToOne(() => Jugador, (jugador) => jugador.id)
  ganador: Jugador;

  @ManyToOne(() => Jugador, (jugador) => jugador.id)
  perdedor: Jugador;

  @Column()
  puntajeGanador: number;

  @Column()
  puntajePerdedor: number;
}
