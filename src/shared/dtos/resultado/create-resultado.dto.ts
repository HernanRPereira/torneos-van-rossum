import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateResultadoDto {
  @IsNotEmpty()
  competenciaId: number;

  @IsNotEmpty()
  ganadorId: number;

  @IsNotEmpty()
  perdedorId: number;

  @IsNotEmpty()
  @IsNumber()
  puntajeGanador: number;

  @IsNotEmpty()
  @IsNumber()
  puntajePerdedor: number;
}
