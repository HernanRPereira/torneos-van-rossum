import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Jugador } from './jugador.entity';
import { Resultado } from './resultado.entity';

@Entity()
export class Torneo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToMany(() => Jugador, (jugador) => jugador.torneos)
  jugadores: Jugador[];

  @OneToMany(() => Resultado, (resultado) => resultado.torneo)
  resultados: Resultado[];

  @Column({
    type: 'timestamp',
    default: null,
    nullable: true,
    name: 'deleted_at',
  })
  deletedAt: Date; // Columna para soft delete
}
