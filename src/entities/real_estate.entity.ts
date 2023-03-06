import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "./addresses.entity";
import { Category } from "./categories.entity";
import { Schedule } from "./schedules_users_properties.entity";

@Entity("real_state")
export class RealEstate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean", default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0, nullable:false})
  value?: number | string;

  @Column({ type: "integer", nullable: false })
  size: number;

  @OneToMany(()=>Schedule, (Schedule)=>Schedule.user)
  schedules:Schedule[]

  @OneToMany(()=>Schedule, (schedule)=>schedule.realEstate)
  schedule:RealEstate[]

  @ManyToOne(()=>Address)
  address:Address

  @CreateDateColumn({type:"date"})
  createdAt: string;

  @UpdateDateColumn({type:"date"})
  updatedAt: string;
  
  @ManyToOne(()=>Category)
  category:Category

}
