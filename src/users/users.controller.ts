import { Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post('/seed-admin')
  async seedAdmin() {
    this.userService.create({
      name: 'Huy',
      isAdmin: true,
      username: 'huyduong',
      password: 'huy123',
    });
  }
}
