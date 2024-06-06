import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  DeleteDateColumn,
} from 'typeorm';
import { Torneo } from './torneo.entity';

@Entity()
export class Jugador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Torneo, (torneo) => torneo.jugadores)
  @JoinTable()
  torneos: Torneo[];

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
