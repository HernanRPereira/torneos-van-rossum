import { Type } from 'class-transformer';
import { IsOptional, IsDateString, IsString, IsArray, ValidateNested } from 'class-validator';

export class UpdateTorneoDto {
  @IsOptional()
  @IsString()
  readonly title?: string;

  readonly description?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Number)
  readonly jugadorIds?: number[];
}
