import { IsString } from 'class-validator';

export class CreateJugadorDto {
  @IsString()
  readonly name: string;
}
