import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
