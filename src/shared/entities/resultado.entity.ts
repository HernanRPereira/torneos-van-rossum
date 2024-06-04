import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Torneo } from './torneo.entity';

@Entity()
export class Resultado {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Torneo, (torneo) => torneo.resultados)
  torneo: Torneo;

  @Column()
  winner: string;

  @Column()
  resultadoDate: Date;

  @Column({
    type: 'timestamp',
    default: null,
    nullable: true,
    name: 'deleted_at',
  })
  deletedAt: Date; // Columna para soft delete
}
