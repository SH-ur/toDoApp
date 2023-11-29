//import { UUID } from "crypto";
import { BaseEntity, Column, Entity, Generated, PrimaryColumn } from "typeorm";

@Entity()
export class Task extends BaseEntity{
   @PrimaryColumn() @Generated('uuid') id: string

   @Column() title: string

   @Column() description: string

   @Column({default:false}) accomplished: boolean
}

