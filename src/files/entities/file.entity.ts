import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  originalName: string;

  @Column()
  sile: number;

  @Column()
  minetype: string;

  @DeleteDateColumn()
  deletedAt?: Date;

  @ManyToOne( () => UserEntity, user => user.files)
  user:UserEntity
}