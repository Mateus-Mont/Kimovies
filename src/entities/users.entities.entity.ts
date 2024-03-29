import { getRounds, hashSync } from "bcryptjs";
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeUpdate,
  BeforeInsert,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Schedule } from "./schedules_users_properties.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 45, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 45, unique: true, nullable: false })
  email: string;

  @Column({type:"boolean", nullable: false, default: false })
  admin: boolean ;

  @Column({ type: "varchar", length: 120, nullable: false })
  password: string;

  @OneToMany(()=>Schedule, (Schedule)=>Schedule.user)
  schedules:Schedule[]

  @CreateDateColumn({type:"date"})
  createdAt: string;

  @UpdateDateColumn({type:"date"})
  updatedAt: string;

  @DeleteDateColumn({ type: "varchar", nullable: true })
  deletedAt?: string | null | undefined;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}
