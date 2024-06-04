import { IsString, IsNumber, IsEmail, IsOptional } from 'class-validator';

export class UpdateJugadorDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsNumber()
  edad?: number;

  @IsOptional()
  @IsString()
  pais?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}
