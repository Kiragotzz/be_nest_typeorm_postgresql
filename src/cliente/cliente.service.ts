import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../db/entities/clientes.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Cliente)
    private clientsRepository: Repository<Cliente>,
  ) {}

  findAll(): Promise<Cliente[]> {
    return this.clientsRepository.find();
  }

  findOne(id: any): Promise<Cliente> {
    return this.clientsRepository.findOneBy({ id });
  }

  create(client: Cliente): Promise<Cliente> {
    return this.clientsRepository.save(client);
  }

  async update(id: number, client: Cliente): Promise<void> {
    await this.clientsRepository.update(id, client);
  }

  async remove(id: number): Promise<void> {
    await this.clientsRepository.delete(id);
  }
}
