import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {FileEntity} from "./entities/file.entity";

@Module({
  controllers: [FilesController],
  providers: [FilesService],
  imports: [TypeOrmModule.forFeature([FileEntity])] // используем сущность файла для работы с DI и с бд
})
export class FilesModule {}
