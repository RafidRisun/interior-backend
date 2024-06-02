import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin) private readonly adminRepo: Repository<Admin>
    ){}

    async create(createAdminDto: CreateAdminDto): Promise<Admin>{
        const admin = this.adminRepo.create({...createAdminDto});
        return await this.adminRepo.save(admin);
    }

    async findOne(email: string): Promise<Admin | undefined>{
        return await this.adminRepo.findOne({where: {email: email}});
    }

    async update(email: string, createAdminDto: CreateAdminDto): Promise<Admin> {
        const admin = await this.adminRepo.findOne({where: {email: email}});
        if(!admin){
            throw new NotFoundException('Admin not found!');
        }

        Object.assign(admin, createAdminDto);
        return await this.adminRepo.save(admin);
    }

    async remove(email: string): Promise<Admin | undefined> {
        const admin = await this.adminRepo.findOne({where: {email: email}});
        if(!admin){
            throw new NotFoundException('Admin not found!');
        }
        await this.adminRepo.remove(admin);
        return admin;
    }
}
