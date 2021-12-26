import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'activity'})
export class Activity {
  @PrimaryGeneratedColumn() // 创建自动生成的列
  id: number;

  @Column({
    type: 'varchar',
    length: 32,
    update: false,
    unique: false,
    default: '',
    comment: '用户ID',
  })
  userId: string;

  @Column({
    type: 'varchar',
    length: 32,
    update: false,
    unique: false,
    default: '',
    comment: '标题',
  })
  title:string;

  @Column({
    type: 'varchar',
    length: 256,
    update: false,
    unique: false,
    default: '',
    comment: '描述',
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 256,
    update: false,
    unique: false,
    default: '',
    comment: '地点',
  })
  address: string;

  @Column({
    type: 'int',
    comment: '花费',
  })
  cost: number;

  @Column({
    type: 'varchar',
    length: 256,
    update: false,
    comment: '开始时间',
  })
  startTime: string;
}
