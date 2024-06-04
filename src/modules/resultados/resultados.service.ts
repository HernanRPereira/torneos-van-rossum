import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateResultadoDto, UpdateResultadoDto } from 'src/shared/dtos';
import { Resultado, Torneo } from 'src/shared/entities';
import { Repository } from 'typeorm';

@Injectable()
export class ResultadosService {
  constructor(
    @InjectRepository(Resultado)
    private readonly resultadoRepository: Repository<Resultado>,
    @InjectRepository(Torneo)
    private readonly torneoRepository: Repository<Torneo>,
  ) {}

  async create(createResultadoDto: CreateResultadoDto): Promise<Resultado> {
    const { torneoId, winner, resultadoDate } = createResultadoDto;
    const torneo = await this.torneoRepository.findOne({
      where: { id: torneoId },
    });
    const resultado = this.resultadoRepository.create({
      torneo,
      winner,
      resultadoDate,
    });
    return this.resultadoRepository.save(resultado);
  }

  findAll(skip: number = 0, take: number = 10): Promise<Resultado[]> {
    return this.resultadoRepository.find({ relations: ['torneo'], skip, take });
  }

  findOne(id: number): Promise<Resultado> {
    return this.resultadoRepository.findOne({
      where: { id },
      relations: ['torneo'],
    });
  }

  async update(
    id: number,
    updateResultadoDto: UpdateResultadoDto,
  ): Promise<Resultado> {
    const { torneoId, winner, resultadoDate } = updateResultadoDto;
    const resultado = await this.resultadoRepository.findOne({
      where: { id },
      relations: ['torneo'],
    });

    if (torneoId) {
      const torneo = await this.torneoRepository.findOne({
        where: { id: torneoId },
      });
      resultado.torneo = torneo;
    }
    if (winner) resultado.winner = winner;
    if (resultadoDate) resultado.resultadoDate = resultadoDate;

    await this.resultadoRepository.save(resultado);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.resultadoRepository.softDelete(id);
  }
}
