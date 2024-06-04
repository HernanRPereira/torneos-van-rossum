import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateJugadorDto, UpdateJugadorDto } from 'src/shared/dtos';
import { Jugador } from 'src/shared/entities';
import { Repository } from 'typeorm';

@Injectable()
export class JugadoresService {
  constructor(
    @InjectRepository(Jugador)
    private readonly jugadorRepository: Repository<Jugador>,
  ) {}

  create(createJugadorDto: CreateJugadorDto): Promise<Jugador> {
    const jugador = this.jugadorRepository.create(createJugadorDto);
    return this.jugadorRepository.save(jugador);
  }

  findAll(skip: number = 0, take: number = 10): Promise<Jugador[]> {
    return this.jugadorRepository.find({ relations: ['books'], skip, take });
  }

  findOne(id: number): Promise<Jugador> {
    return this.jugadorRepository.findOne({
      where: { id },
      relations: ['books'],
    });
  }

  async update(
    id: number,
    updateJugadorDto: UpdateJugadorDto,
  ): Promise<Jugador> {
    await this.jugadorRepository.update(id, updateJugadorDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.jugadorRepository.softDelete(id);
  }
}
