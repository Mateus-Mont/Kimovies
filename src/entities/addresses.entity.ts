import { Column, Entity, PrimaryColumn } from "typeorm";
import { number, tuple } from "zod";

@Entity("addresses")
export class Address {
  @PrimaryColumn()
  id: number;

  @Column({ type: "varchar", length: 45, nullable: false })
  street: string;

  @Column({ type: "varchar", length: 8, nullable: false })
  zipCode: string;

  @Column({ type: "varchar", length: 6, nullable: true })
  number?: string | null | undefined;

  @Column({ type: "varchar", length: 20, nullable: false })
  city: string;

  @Column({ type: "varchar", length: 2, nullable: false })
  state: string;
}
