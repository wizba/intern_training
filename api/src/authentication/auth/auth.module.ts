import { Module } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { AuthService } from '../../services/auth/auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [UsersService],
    providers: [AuthService, LocalStrategy],
})
export class AuthModule {
}
