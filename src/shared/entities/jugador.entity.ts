import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Jugador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  edad: number;

  @Column()
  pais: string;

  @Column({ unique: true })
  email: string;
}
