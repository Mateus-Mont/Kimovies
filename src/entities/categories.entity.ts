import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity("categories")
export class Category {
  @PrimaryColumn()
  id: number;

  @Column({ type: "varchar", length: 45, unique: true, nullable: false })
  name: string;

}
