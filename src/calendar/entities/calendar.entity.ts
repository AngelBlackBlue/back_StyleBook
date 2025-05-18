import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

enum StateCalendar {
  ENABLE = 'enable',
  DISABLED = 'disabled',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

@Entity({ name: 'calendar' })
export class Calendar {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp', nullable: true })
  day: Date;

  @Column({ type: 'time', nullable: true })
  hour: string;

  @Column({ type: 'enum', enum: StateCalendar, default: StateCalendar.ENABLE })
  state: StateCalendar;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
