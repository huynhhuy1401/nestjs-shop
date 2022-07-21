import { Controller, Post } from '@nestjs/common';
import { Role } from 'src/enums/role.enum';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post('/seed-admin')
  async seedAdmin() {
    this.userService.create({
      name: 'Huy',
      roles: [Role.Admin],
      username: 'huyduong',
      password: 'huy123',
    });
  }
}
