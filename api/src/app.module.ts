import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import { AuthModule } from './authentication/auth/auth.module';
import { AuthService } from './services/auth/auth.service';
import { UsersModule } from './modules/users/users.module';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [
    MongooseModule.forRoot(
    'mongodb://mongo:27017/student',
  ), ItemsModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, AuthService, UsersService],
})
export class AppModule {}
