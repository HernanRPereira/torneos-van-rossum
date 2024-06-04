import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Torneo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  fechaInicio: string;

  @Column()
  fechaFin: string;

  @Column({ nullable: true })
  descripcion: string;
}
