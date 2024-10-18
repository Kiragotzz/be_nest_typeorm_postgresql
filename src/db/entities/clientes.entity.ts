import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clientes' })
export class ClientesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  nome: string;

  @Column({ type: 'varchar' })
  salario: string;

  @Column({ type: 'varchar' })
  empresa: string;
}