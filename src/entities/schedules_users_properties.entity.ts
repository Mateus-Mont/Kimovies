import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RealEstate } from "./real_estate.entity";
import { User } from "./users.entities.entity";

@Entity("schedules_users_properties")
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: "timestamp", nullable: false })
  date: string | Date;

  @Column({ type: "time" })
  hora: string;

  @ManyToOne(() => RealEstate, { cascade: true })
  realEstate: RealEstate;

  @ManyToOne(() => User, { cascade: true })
  user: User;
}
