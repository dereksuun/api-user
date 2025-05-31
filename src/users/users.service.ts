import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './users.interface';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find(u => u.id === id);
    if (!user) throw new NotFoundException('Usuário não encontrado');
    return user;
  }

  create(name: string, email: string): User {
    const newUser: User = {
      id: this.idCounter++,
      name,
      email,
    };
    this.users.push(newUser);
    return newUser;
  }

  delete(id: number): void {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) throw new NotFoundException('Usuário não encontrado');
    this.users.splice(index, 1);
  }
}
