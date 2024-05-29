import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DesignService } from './design.service';
import { CreateDesignDto } from './dto/create-design.dto';
import { UpdateDesignDto } from './dto/update-design.dto';

@Controller('design')
export class DesignController {
  constructor(private readonly designService: DesignService) {}

  @Post()
  create(@Body() createDesignDto: CreateDesignDto) {
    return this.designService.create(createDesignDto);
  }

  @Get()
  findAll() {
    return this.designService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.designService.findOne(+id);
  }

  @Get('category/:category')
  findByCategory(@Param('category') category: string) {
    return this.designService.findByCategory(category);
  }

  @Get('category/:category/style/:style')
  findByCategoryStyle(@Param('category') category: string, @Param('style') style: string ) {
    return this.designService.findByCategoryStyle(category, style);
  }

  @Get('category/:category/style/:style/grade/:grade')
  findByCategoryStyleGrade(@Param('category') category: string, @Param('style') style: string, @Param('grade') grade: string ) {
    return this.designService.findByCategoryStyleGrade(category, style, grade);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDesignDto: UpdateDesignDto) {
    return this.designService.update(+id, updateDesignDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.designService.remove(+id);
  }
}
