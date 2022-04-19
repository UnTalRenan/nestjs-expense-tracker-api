import { IsString, IsNumber } from 'class-validator';
export class UpdateExpenseDto {
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

  //@IsNumber()
  //readonly id: number;
}
