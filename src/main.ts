import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get(ConfigService);

  const viewsDirectory = config.get<string>('templates.path');
  const publicDirectory = config.get<string>('templates.public');

  app.setViewEngine('hbs');
  app.setBaseViewsDir(viewsDirectory);
  app.useStaticAssets(publicDirectory);

  await app.listen(3000);
}
bootstrap();
