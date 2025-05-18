import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../enum/role.enum';
import { Type } from '../enum/type.enum';

@Entity({ name: 'hairdressers' })
export class Hairdresser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  nickname: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  picture: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.HAIRDRESSER,
  })
  role: Role;

  @Column({
    type: 'set',
    enum: Type,
    default: [],
  })
  type: Type[];

  @Column({ type: 'boolean', default: false })
  toMorning: boolean;

  @Column({ type: 'time', nullable: true })
  stripOneStart: string;

  @Column({ type: 'time', nullable: true })
  stripOneEnd: string;

  @Column({ type: 'boolean', default: false })
  toAfternoon: boolean;

  @Column({ type: 'time', nullable: true })
  stripTwoStart: string;

  @Column({ type: 'time', nullable: true })
  stripTwoEnd: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt: Date;
}
