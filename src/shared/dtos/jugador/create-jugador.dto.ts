import { IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class CreateJugadorDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsNumber()
  edad: number;

  @IsNotEmpty()
  @IsString()
  pais: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}