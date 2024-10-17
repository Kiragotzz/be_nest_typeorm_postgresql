import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ClientService } from './cliente.service';
import { Cliente } from '../db/entities/clientes.entity';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  findAll(): Promise<Cliente[]> {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Cliente> {
    return this.clientService.findOne(+id);
  }

  @Post()
  create(@Body() client: Cliente): Promise<Cliente> {
    return this.clientService.create(client);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() client: Cliente): Promise<void> {
    return this.clientService.update(+id, client);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.clientService.remove(+id);
  }
}
