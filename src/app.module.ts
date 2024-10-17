import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './cliente/cliente.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    ClientModule,
    DbModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
