import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client) private readonly clientRepo: Repository<Client>
  ){}
  async create(createClientDto: CreateClientDto): Promise<Client> {
    const client = this.clientRepo.create({...createClientDto});
    return await this.clientRepo.save(client);
  }

  async findAll() {
    return await this.clientRepo.find({});
  }

  async findOne(id: number) {
    return await this.clientRepo.findOne({where: {id: id}});
  }

  async update(id: number, updateClientDto: UpdateClientDto): Promise<Client> {
    const client = await this.clientRepo.findOne({where: {id: id}});
    if(!client){
      throw new NotFoundException('Client not found');
    }
    Object.assign(client, updateClientDto);
    return await this.clientRepo.save(client);
  }

  async remove(id: number) {
    const client = await this.clientRepo.findOne({where: {id: id}});
    if(!client){
      throw new NotFoundException('Client not found');
    }
    await this.clientRepo.remove(client);
    return client;
  }
}
