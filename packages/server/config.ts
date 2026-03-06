import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// typeorm配置.
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '8.130.131.133',
  port: 3308,
  username: 'root',
  password: '123456',
  database: 'lowcode',
  entities: ['dist/**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: true,
};
