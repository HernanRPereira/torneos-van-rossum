import { IsOptional, IsDateString } from 'class-validator';

export class UpdateTorneoDto {
  @IsOptional()
  nombre?: string;

  @IsOptional()
  @IsDateString()
  fechaInicio?: string;

  @IsOptional()
  @IsDateString()
  fechaFin?: string;

  @IsOptional()
  descripcion?: string;
}
