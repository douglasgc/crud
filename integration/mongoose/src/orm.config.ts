import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const withCache: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'nestjsx_crud',
  synchronize: false,
  logging: true,
  cache: {
    type: 'redis',
    options: {
      host: '127.0.0.1',
      port: 6379,
    },
  },
  entities: [join(__dirname, './**/*.entity{.ts,.js}')],
};
