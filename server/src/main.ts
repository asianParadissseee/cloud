import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {cors: false});
    const config = new DocumentBuilder()
        .setTitle('Облачное хранилище')
        .setDescription('Данные облачного хранилища')
        .setVersion('1.0.0')
        .addTag('API')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
    app.enableCors({credentials: true, origin: true})
    await app.listen(3000);
}

bootstrap();
