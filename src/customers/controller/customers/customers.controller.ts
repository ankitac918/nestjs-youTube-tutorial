import {
  Controller,
  ParseIntPipe,
  Get,
  Param,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomerById(id);
    if(customer) return customer;
    else throw new HttpException('customer not found',HttpStatus.BAD_REQUEST)
  }

  @Post('create ')
  createCustomer(){}
}
 