import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
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

  @Column({
    type: 'timestamp',
    default: null,
    nullable: true,
    name: 'deleted_at',
  })
  deletedAt: Date; // Columna para soft delete
}
