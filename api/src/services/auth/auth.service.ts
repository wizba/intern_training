import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username);

        if (user && user.password === pass) {
            const { password, ...result } = user;

            return result;
        }

        return null;
    }
}
