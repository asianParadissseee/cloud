import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';

export enum FileType {
  PHOTOS = 'photos',
  TRASH = 'trash',
}
@Entity('file')
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  filename: string;
  @Column()
  originalName: string;
  @Column()
  size: number;
  @Column()
  mimetype: string;
  @DeleteDateColumn()
  deleteAt?: Date;
  @ManyToOne(() => UserEntity, (user) => user.files)
  users: UserEntity;
}
