import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { StateCalendar } from '../enum/stateCalendar.enum';

@Entity({ name: 'calendar' })
export class Calendar {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  day: Date;

  @Column()
  hour: string;

  @Column({ enum: StateCalendar, default: StateCalendar.ENABLE })
  state: StateCalendar;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
