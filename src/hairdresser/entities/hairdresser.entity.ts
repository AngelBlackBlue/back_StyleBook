import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '../enum/role.enum';
import { Type } from '../enum/type.enum';

@Entity({ name: 'hairdressers' })
export class Hairdresser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column()
  picture: string;

  @Column({
    enum: Role,
    default: Role.HAIRDRESSER,
  })
  role: Role;

  @Column({
    type: 'set',
    enum: Type,
    default: [Type.HAIRCUT],
  })
  type: Type[];

  @Column()
  toMorning: boolean;

  @Column()
  stripOneStart: string;

  @Column()
  stripOneEnd: string;

  @Column()
  toAfternoon: boolean;

  @Column()
  stripTwoStart: string;

  @Column()
  stripTwoEnd: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
