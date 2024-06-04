import { IsNotEmpty, IsDateString } from 'class-validator';

export class CreateCompetenciaDto {
  @IsNotEmpty()
  torneoId: number;

  @IsNotEmpty()
  jugador1Id: number;

  @IsNotEmpty()
  jugador2Id: number;

  @IsNotEmpty()
  @IsDateString()
  fecha: string;
}
