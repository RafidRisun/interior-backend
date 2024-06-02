import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto, LoginDto } from './dto/create-admin.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { AuthguardGuard } from 'src/authguard/authguard.guard';

@Controller('admin')
export class AdminController { 
  constructor(
    private readonly adminService: AdminService,
    private jwtService: JwtService
  ) {}

  @Post('register')
  async register(@Body() createAdminDto: CreateAdminDto, @Req() request: Request){
    const cookie = request.cookies['jwt'];
    if (!cookie) {
      throw new UnauthorizedException('No JWT token found');
    }
    const data = await this.jwtService.verifyAsync(cookie);

    if (!data) {
      throw new UnauthorizedException('Invalid JWT token');
    }

    const email = data['email'];

    if (email != "rizvi.rhr@gmail.com"){
      throw new UnauthorizedException('Access Denied! Contact your Employer');
    }
    const hashedPassword = await bcrypt.hash(createAdminDto.password, 12);
    createAdminDto.password = hashedPassword;
    return this.adminService.create(createAdminDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) response: Response) {
  const email = loginDto.email;
  const admin = await this.adminService.findOne(email);

  if (!admin) {
    throw new BadRequestException('Invalid Email');
  }

  if (!await bcrypt.compare(loginDto.password, admin.password)) {
    throw new BadRequestException('Invalid Password');
  }

  const jwt = await this.jwtService.signAsync({ email: admin.email, id: admin.id });

  response.cookie('jwt', jwt, { httpOnly: true });

  return {
    message: 'success'
  };
}


@Get()
async user(@Req() request: Request) {
  try {
    const cookie = request.cookies['jwt'];

    if (!cookie) {
      throw new UnauthorizedException('No JWT token found');
    }

    const data = await this.jwtService.verifyAsync(cookie);

    if (!data) {
      throw new UnauthorizedException('Invalid JWT token');
    }

    const email = data['email'];

    const user = await this.adminService.findOne(email);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const { password, ...result } = user;

    return result;
  } catch (e) {
    throw new UnauthorizedException('Unauthorized access');
  }
}


  @Post('logout')
  async logout(@Res({passthrough: true}) response: Response) {
      response.clearCookie('jwt');

      return {
          message: 'success'
      }
  }

  @Patch(':email')
  async update(@Param('email') email: string, @Body() createAdminDto: CreateAdminDto,  @Req() request: Request){
    const cookie = request.cookies['jwt'];
    if (!cookie) {
      throw new UnauthorizedException('No JWT token found');
    }
    const data = await this.jwtService.verifyAsync(cookie);

    if (!data) {
      throw new UnauthorizedException('Invalid JWT token');
    }

    const currentEmail = data['email'];

    if (currentEmail != "rizvi.rhr@gmail.com"){
      throw new UnauthorizedException('Access Denied! Contact your Employer');
    }
    return this.adminService.update(email, createAdminDto);
  }

  @Delete(':email')
  async remove(@Param('email') email: string,  @Req() request: Request){
    const cookie = request.cookies['jwt'];
    if (!cookie) {
      throw new UnauthorizedException('No JWT token found');
    }
    const data = await this.jwtService.verifyAsync(cookie);

    if (!data) {
      throw new UnauthorizedException('Invalid JWT token');
    }

    const currentEmail = data['email'];

    if (currentEmail != "rizvi.rhr@gmail.com"){
      throw new UnauthorizedException('Access Denied! Contact your Employer');
    }
    return this.adminService.remove(email);
  }
}
