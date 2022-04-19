import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateExpenseDto, UpdateExpenseDto } from './dto';
import { Expense } from './expense.entity';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseRepository: Repository<Expense>,
  ) {}

  async getAllExpenses(): Promise<Expense[]> {
    return await this.expenseRepository.find();
  }
  async getExpenses(id: string): Promise<Expense[]> {
    return await this.expenseRepository.find({
      where: {
        idUser: id,
      },
      order: { fecha: 'DESC' },
    });
  }
  async getExpenseById(id: number): Promise<Expense> {
    const expense = await this.expenseRepository.findOne(id);
    if (!expense) {
      throw new NotFoundException('Resource not found');
    }
    return expense;
  }
  async getExpensesById(id: number): Promise<Expense[]> {
    return this.expenseRepository.find();
  }
  async createExpense(bodyExpense: CreateExpenseDto) {
    const expense = this.expenseRepository.create(bodyExpense);
    return this.expenseRepository.save(expense);
  }

  async updateExpense(id: number, bodyExpense: UpdateExpenseDto) {
    const expense: Expense = await this.expenseRepository.findOne(id);
    if (!expense) {
      throw new NotFoundException('Resource not found');
    }
    const updateExpense: Expense = Object.assign(expense, bodyExpense);

    return await this.expenseRepository.save(updateExpense);
  }
  async deleteExpense(id: number): Promise<void> {
    const expense = await this.expenseRepository.findOne(id);
    if (!expense) {
      throw new NotFoundException('Resource not found');
    }
    this.expenseRepository.remove(expense);
  }
}
