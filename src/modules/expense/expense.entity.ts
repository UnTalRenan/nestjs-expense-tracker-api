import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  idUser: string;

  @Column()
  nombre: string;

  @Column()
  categoria: string;

  @Column()
  tipo: string;

  @Column({ type: 'date' })
  fecha: Date;

  @Column()
  valor: number;
}
