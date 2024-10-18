import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ClientService } from './cliente.service';
import { ClientesEntity } from 'src/db/entities/clientes.entity';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  findAll(): Promise<ClientesEntity[]> {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ClientesEntity> {
    return this.clientService.findOne(+id);
  }

  @Get('find-by-ids')
  async findByIds(@Body('ids') ids: string[]): Promise<ClientesEntity[]> {
    return this.clientService.findByIds(ids);
  }

  @Post()
  create(@Body() client: ClientesEntity): Promise<ClientesEntity> {
    return this.clientService.create(client);
  }

  @Put('/:id')
  update(@Param() params: ClientesEntity, @Body() cliente: ClientesEntity): Promise<void> {
    return this.clientService.update(params.id, cliente);
  }

  @Delete('/:id')
  remove(@Param() params: ClientesEntity): Promise<void> {
    return this.clientService.remove(params.id);
  }
}
