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

  @CreateDateColumn({ type: "date", nullable: false })
  date: string | Date;

  @Column({ type: "time",nullable:false })
  hour: string;

  @ManyToOne(() => RealEstate)
  realEstate: RealEstate;

  @ManyToOne(() => User)
  user: User;
}
