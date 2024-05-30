import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DesignModule } from './design/design.module';
import { ClientModule } from './client/client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import config from 'ormconfig';

@Module({
  imports: [DesignModule, ClientModule, TypeOrmModule.forRoot(config), AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
