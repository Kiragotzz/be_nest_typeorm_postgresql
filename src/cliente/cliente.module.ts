import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from '../db/entities/clientes.entity';
import { ClientService } from './cliente.service';
import { ClientController } from './cliente.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  providers: [ClientService],
  controllers: [ClientController],
})
export class ClientModule {}
