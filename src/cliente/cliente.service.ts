import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { ClientesEntity } from 'src/db/entities/clientes.entity';
import { CreateUserResponse, ClienteDto } from './cliente.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientesEntity)
    private readonly clientsRepository: Repository<ClientesEntity>,
  ) { }

  findAll(): Promise<ClientesEntity[]> {
    return this.clientsRepository.find();
  }

  findOne(id: any): Promise<ClientesEntity> {
    return this.clientsRepository.findOneBy({ id });
  }

  async findById(id: string): Promise<ClienteDto | null> {
    console.log('id: ', id)
    const clienteFound = await this.clientsRepository.findOne({
      where: { id: id },
    });

    if (!clienteFound) {
      return null;
    }

    return {
      id: clienteFound.id,
      nome: clienteFound.nome,
      salario: clienteFound.salario,
      empresa: clienteFound.empresa,
    };
  }

  async findByIds(id: string[]): Promise<ClienteDto[] | null[]> {
    console.log('id: ', id)
    const clientesFound = await this.clientsRepository.find({
      where: { id: In(id) },
    });

    if (!clientesFound) {
      return null;
    }

    return clientesFound;
  }

  async create(newCliente: ClienteDto): Promise<CreateUserResponse> {
    console.log('newCliente: ', newCliente)
    // return this.clientsRepository.save(client);

    if (newCliente.id) {
      const clienteAlreadyRegistered = await this.findById(newCliente.id)
      if (clienteAlreadyRegistered) {
        console.log('clienteAlreadyRegistered: ', clienteAlreadyRegistered)
        throw new ConflictException(
          `Cliente '${newCliente.id}' already registered`,
        );
      }
    }

    const dbUser = new ClientesEntity();
    dbUser.nome = newCliente.nome;
    dbUser.salario = newCliente.salario;
    dbUser.empresa = newCliente.empresa;
    // dbUser.passwordHash = bcryptHashSync(newUser.password, 10);

    const { id, nome, salario, empresa } = await this.clientsRepository.save(dbUser);
    return { id, nome, salario, empresa };
  }

  async update(id: any, client: ClientesEntity): Promise<void> {
    await this.clientsRepository.update(id, client);
  }

  async remove(id: any): Promise<void> {
    await this.clientsRepository.delete(id + '');
  }
}
