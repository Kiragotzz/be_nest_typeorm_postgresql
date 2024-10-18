import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientService } from './cliente.service';
import { ClientController } from './cliente.controller';
import { ClientesEntity } from 'src/db/entities/clientes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientesEntity])],
  providers: [ClientService],
  controllers: [ClientController],
})
export class ClientModule {}
