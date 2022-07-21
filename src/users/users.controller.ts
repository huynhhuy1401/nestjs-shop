import { Body, Controller, Post } from '@nestjs/common';
import { Role } from 'src/enums/role.enum';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post()
  async create(@Body() createUserDto: Omit<CreateUserDto, 'roles'>) {
    this.userService.create({
      roles: [Role.User],
      ...createUserDto,
    });
  }
}
