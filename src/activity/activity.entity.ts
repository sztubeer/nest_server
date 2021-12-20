import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'activity'})
export class Activity {
  @PrimaryGeneratedColumn() // 创建自动生成的列
  id: number;

  @Column()
  userId: number;

  @Column()
  title:string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  cost: number;

  @Column()
  startTime: string;
}
