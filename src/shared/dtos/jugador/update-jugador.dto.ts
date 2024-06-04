import { IsString } from 'class-validator';

export class UpdateJugadorDto {
  @IsString()
  readonly name: string;
}
