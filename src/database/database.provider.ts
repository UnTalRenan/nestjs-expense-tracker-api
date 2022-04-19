import { DynamicModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

import { Environment } from 'src/common/enum';

export const DataBaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  async useFactory(config: ConfigService) {
    const isDevelopmentEnv = config.get('NODE_ENV') !== Environment.Production;
    const dbConfig = {
      type: 'postgres',
      url: 'postgres://jamrgrahlbochv:e6ccb15a6f44dc5a644677b305267acda1250de464d2bc55e4915ebbf70dc2ef@ec2-23-20-224-166.compute-1.amazonaws.com:5432/d6f3dhfg4k78kr',
      ssl: {
        rejectUnauthorized: false,
      }, 
      /*
      host: config.get('DB_HOST'),
      port: config.get('DB_PORT'),
      username: config.get('DB_USER'),
      password: config.get('DB_PASSWORD'),
      database: config.get('DB_NAME'),/**/
      autoLoadEntities: true,
      synchronize: isDevelopmentEnv,
      logging: config.get('DB_LOGGING'),
    } as ConnectionOptions;
    return dbConfig;
  },
});
