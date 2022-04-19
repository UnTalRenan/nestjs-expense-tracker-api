import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateExpenseDto, UpdateExpenseDto } from './dto';
import { Expense } from './expense.entity';
import { ExpenseService } from './expense.service';
@ApiTags('expense')
@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseservice: ExpenseService) {}
  /*@Get()
  getExpenses(): Promise<Expense[]> {
    return this.expenseservice.getAllExpenses();
  }*/
  @ApiOkResponse({
    description: 'The Resource list expense by id has ben succesfully return.',
  })
  @Get(':id')
  getExpense(@Param('id') id: number): Promise<Expense> {
    return this.expenseservice.getExpenseById(id);
  }
  @ApiOkResponse({
    description:
      'The Resource list expense by User has ben succesfully return.',
  })
  @Get('/user/:idUser')
  getExpenseQuery(@Param('idUser') idUser: string): Promise<Expense[]> {
    return this.expenseservice.getExpenses(idUser);
  }
  @ApiCreatedResponse({
    description: 'The expense has ben succesfully created.',
  })
  @ApiBadRequestResponse({
    description: 'The resource is incorrect.',
  })
  @Post()
  createExpense(@Body() body: CreateExpenseDto): Promise<Expense> {
    return this.expenseservice.createExpense(body);
  }
  @ApiOkResponse({
    description: 'The expense has ben succesfully update.',
  })
  @ApiBadRequestResponse({
    description: 'The resource is incorrect.',
  })
  @Patch(':id')
  updateExpense(
    @Param('id') id: number,
    @Body() expense: UpdateExpenseDto,
  ): Promise<Expense> {
    return this.expenseservice.updateExpense(id, expense);
  }
  @ApiOkResponse({
    description: 'The expense has ben succesfully removed.',
  })
  @ApiNotFoundResponse({ description: 'The resource is incorrect.' })
  @Delete(':id')
  deleteExpense(@Param('id') id: number): Promise<void> {
    return this.expenseservice.deleteExpense(id);
  }
}
