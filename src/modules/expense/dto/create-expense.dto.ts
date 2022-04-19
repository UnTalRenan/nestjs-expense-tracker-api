import { IsString, IsNumber } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  readonly idUser: string;

  @IsString()
  readonly categoria: string;

  @IsString()
  readonly tipo: string;

  @IsString()
  readonly fecha: Date;

  @IsString()
  readonly nombre: string;

  @IsNumber()
  readonly valor: number;
}
