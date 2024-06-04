import { IsNotEmpty, IsDateString, IsOptional } from 'class-validator';

export class CreateTorneoDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  @IsDateString()
  fechaInicio: string;

  @IsNotEmpty()
  @IsDateString()
  fechaFin: string;

  @IsOptional()
  descripcion: string;
}
