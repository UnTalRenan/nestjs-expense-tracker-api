import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateExpenseDto, UpdateExpenseDto } from './dto';
import { Expense } from './expense.entity';
import { ExpenseService } from './expense.service';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseservice: ExpenseService) {}
  @Get()
  getExpenses(): Promise<Expense[]> {
    return this.expenseservice.getAllExpenses();
  }
  @Get('/user/:idUser')
  getExpenseQuery(@Param('idUser') idUser: string): Promise<Expense[]> {
    return this.expenseservice.getExpenses(idUser);
  }
  @Get(':id')
  getExpense(@Param('id') id: number): Promise<Expense> {
    return this.expenseservice.getExpenseById(id);
  }
  @Post()
  createExpense(@Body() body: CreateExpenseDto): Promise<Expense> {
    return this.expenseservice.createExpense(body);
  }
  @Patch(':id')
  updateExpense(
    @Param('id') id: number,
    @Body() expense: UpdateExpenseDto,
  ): Promise<Expense> {
    console.log('HOLA MUNDO ' + JSON.stringify(expense));
    return this.expenseservice.updateExpense(id, expense);
  }
  @Delete(':id')
  deleteExpense(@Param('id') id: number): Promise<void> {
    return this.expenseservice.deleteExpense(id);
  }
}
