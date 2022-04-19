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
      url: 'postgres://mplmpmnbcvwobt:cf1f33db1ea2a7189ade3dad8c1fed2101f3d9e7415ffd0f5e13e388c0176697@ec2-23-20-224-166.compute-1.amazonaws.com:5432/db1c4pvc0onj3r',
      ssl: {
        rejectUnauthorized: false,
      },
      /*host: config.get('DB_HOST'),
      port: config.get('DB_PORT'),
      username: config.get('DB_USER'),
      password: config.get('DB_PASSWORD'),
      database: config.get('DB_NAME'),*/
      autoLoadEntities: true,
      synchronize: isDevelopmentEnv,
      logging: config.get('DB_LOGGING'),
    } as ConnectionOptions;
    return dbConfig;
  },
});