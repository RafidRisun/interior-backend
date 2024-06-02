import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Client]),
  JwtModule.register({
    secret: process.env.JWT_SECRET || 'defaultSecret', // Use environment variable
    signOptions: { expiresIn: '1h' },
  }),],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
