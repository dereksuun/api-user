import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(@Body() body: { name: string; email: string }) {
    const { name, email } = body;
    return this.usersService.create(name, email);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.usersService.delete(+id);
    return { message: 'Usuário removido com sucesso' };
  }
}
