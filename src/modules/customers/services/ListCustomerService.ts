import { getCustomRepository } from 'typeorm';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';
import Customers from '../typeorm/entities/Customer';

class ListCustomersService {
  public async execute(): Promise<Customers[]> {
    const customersRepository = getCustomRepository(CustomersRepository);
    const customers = customersRepository.find();

    return customers;
  }
}

export default ListCustomersService;
