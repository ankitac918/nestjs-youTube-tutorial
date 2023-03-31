import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      email: 'ankit@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'chauhan@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'raj@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 4,
      email: 'sonu@gmail.com',
      createdAt: new Date(),
    },
  ];

  findCustomerById(id:number) {
    return this.users.find((user) => user.id === id);
  }
}
