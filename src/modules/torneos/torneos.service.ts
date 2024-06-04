import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTorneoDto, UpdateTorneoDto } from 'src/shared/dtos';
import { Jugador, Torneo } from 'src/shared/entities';
import { Like, Repository } from 'typeorm';

@Injectable()
export class TorneosService {
  constructor(
    @InjectRepository(Torneo)
    private readonly torneoRepository: Repository<Torneo>,
    @InjectRepository(Jugador)
    private readonly jugadorRepository: Repository<Jugador>,
  ) {}

  async create(createTorneoDto: CreateTorneoDto): Promise<Torneo> {
    const { title, description, jugadorIds } = createTorneoDto;
    const jugadores = await this.jugadorRepository.findByIds(jugadorIds);
    const torneo = this.torneoRepository.create({
      title,
      description,
      jugadores,
    });
    return this.torneoRepository.save(torneo);
  }

  findAll(skip: number = 0, take: number = 10): Promise<Torneo[]> {
    return this.torneoRepository.find({ relations: ['jugadores'], skip, take });
  }

  findOne(id: number): Promise<Torneo> {
    return this.torneoRepository.findOne({
      where: { id },
      relations: ['jugadores'],
    });
  }

  async update(id: number, updateTorneoDto: UpdateTorneoDto): Promise<Torneo> {
    const { title, description, jugadorIds } = updateTorneoDto;
    const torneo = await this.torneoRepository.findOne({
      where: { id },
      relations: ['jugadores'],
    });

    if (title) torneo.title = title;
    if (description) torneo.description = description;
    if (jugadorIds) {
      const jugadores = await this.jugadorRepository.findByIds(jugadorIds);
      torneo.jugadores = jugadores;
    }

    await this.torneoRepository.save(torneo);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.torneoRepository.softDelete(id);
  }

  async deleteOne(id: number): Promise<void> {
    await this.torneoRepository.delete(id);
  }

  async findByjugador(jugadorId: number): Promise<Torneo[]> {
    return this.torneoRepository.find({
      where: { jugadores: { id: jugadorId } },
      relations: ['jugadores'],
    });
  }

  async findByTitle(title: string): Promise<Torneo[]> {
    return this.torneoRepository.find({
      where: { title: Like(`%${title}%`) },
      relations: ['jugadores'],
    });
  }
}
