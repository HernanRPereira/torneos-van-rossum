import { IsInt, IsString } from 'class-validator';

export class CreateResultadoDto {
  @IsInt()
  readonly torneoId: number;

  @IsString()
  readonly winner: string;

  readonly resultadoDate: Date;
}
