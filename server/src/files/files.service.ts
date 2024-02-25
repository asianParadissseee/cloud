import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {FileEntity, FileType} from "./entities/file.entity";
import {Repository} from "typeorm";

@Injectable()
export class FilesService {

    constructor(
        @InjectRepository(FileEntity)
        private repository: Repository<FileEntity>
    ) {
    }

    create(file: Express.Multer.File, userId: number) {
        try {
            return this.repository.save({
                filename: file.filename,
                originalName: file.originalname,
                size: file.size,
                mimetype: file.mimetype,
                users: {id: userId}
            })
        } catch (e) {
            throw new InternalServerErrorException("Ошибка создания файлов")
        }
    }

    findAll(userId: number, fileType: FileType) {
        const qb = this.repository.createQueryBuilder("file")
        qb.where("file.userId = :userId", {userId})
        if (fileType === FileType.PHOTOS) {
            qb.andWhere('file.mimetype ILIKE :type', {type: '%image%'});
        }
        if (fileType === FileType.TRASH) {
            qb.withDeleted().andWhere("file.deleteAs IS NOT NULL")
        }
        return qb.getMany()
    }


}
