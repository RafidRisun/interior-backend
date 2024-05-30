import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDesignDto } from './dto/create-design.dto';
import { UpdateDesignDto } from './dto/update-design.dto';
import { InjectRepository } from '@nestjs/typeorm'
import { Design } from './entities/design.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DesignService {

  constructor(
    @InjectRepository(Design) private readonly designRepo: Repository<Design>
  ){}

  async create(createDesignDto: CreateDesignDto): Promise<Design> {
    const design = this.designRepo.create({ ...createDesignDto });
    return await this.designRepo.save(design);
  }

  async findAll() {
    return await this.designRepo.find({});
  }

  async findOne(id: number) {
    return await this.designRepo.findOne({ where: {id: id} });
  }

  async update(id: number, updateDesignDto: UpdateDesignDto): Promise<Design> {
    const design = await this.designRepo.findOne({where: {id: id}});
    if(!design){
      throw new NotFoundException('Design not found!');
    }
    Object.assign(design, updateDesignDto);
    return await this.designRepo.save(design);
  }

  async remove(id: number): Promise<Design | undefined> {
    const design = await this.designRepo.findOne({where: {id: id}});
    if(!design){
      throw new NotFoundException('Design not found!');
    }
    await this.designRepo.remove(design);
    return design;
  }

  async findByCategory(category: string) {
    return await this.designRepo.findOne({ where: {category: category} });
  }
  
  async findByCategoryStyle(category: string, style: string) {
    return await this.designRepo.findOne({ where: {category: category, style: style} });
  }

  async findByCategoryStyleGrade(category: string, style: string, grade: string) {
    return await this.designRepo.findOne({ where: {category: category, style: style, grade: grade} });
  }
}
