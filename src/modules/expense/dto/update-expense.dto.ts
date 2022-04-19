import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsDecimal } from 'class-validator';
export class UpdateExpenseDto {
  @ApiProperty({
    type: String,
    description: 'Expense/Income user email',
    default: '',
  })
  @IsString()
  readonly idUser: string;
  @ApiProperty({
    type: String,
    description: 'Expense/Income category',
    default: '',
  })
  @IsString()
  readonly categoria: string;
  @ApiProperty({
    type: String,
    description: 'Type: Income or Expense',
    default: '',
  })
  @IsString()
  readonly tipo: string;
  @ApiProperty({
    type: String,
    description: 'Date of Expense/Income',
    default: '',
  })
  @IsString()
  readonly fecha: Date;
  @ApiProperty({
    type: String,
    description: 'Name of Expense/Income',
    default: '',
  })
  @IsString()
  readonly nombre: string;
  @ApiProperty({
    type: Number,
    description: 'Amount of Expense/Income',
    default: '',
  })
  @IsNumber()
  readonly valor: number;
}
