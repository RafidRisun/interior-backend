import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DesignModule } from './design/design.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [DesignModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
