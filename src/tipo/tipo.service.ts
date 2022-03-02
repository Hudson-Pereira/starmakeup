import { Injectable } from '@nestjs/common';
import { CreateTipoDto } from './dto/create-tipo.dto';
import { UpdateTipoDto } from './dto/update-tipo.dto';

@Injectable()
export class TipoService {
  create(createTipoDto: CreateTipoDto) {
    return 'This action adds a new tipo';
  }

  findAll() {
    return `This action returns all tipo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipo`;
  }

  update(id: number, updateTipoDto: UpdateTipoDto) {
    return `This action updates a #${id} tipo`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipo`;
  }
}
