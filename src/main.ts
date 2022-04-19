import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      //forbidNonWhitelisted: true
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Expense Tracker API')
    .setDescription('Expense Tracker CRUD api')
    .setVersion('1.0')
    .build();

  const doc = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, doc);

  app.enableCors();
  await app.listen(AppModule.port);
}
bootstrap();
