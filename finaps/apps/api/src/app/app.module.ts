import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RijksService } from './rijks/rijks.service';
import { RijksController } from './rijks/rijks.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [AppController, RijksController],
  providers: [AppService, RijksService],
})
export class AppModule {}
