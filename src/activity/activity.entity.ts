import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'activity'})
export class Activity {
  @PrimaryGeneratedColumn() // 创建自动生成的列
  id: number;

  @Column({
    type: 'varchar',
    length: 32,
    update: false,
    default: '',
    comment: '用户ID',
  })
  userId: string;

  @Column({
    type: 'varchar',
    length: 32,
    default: '',
    comment: '标题',
  })
  title:string;

  @Column({
    type: 'varchar',
    length: 256,
    default: '',
    comment: '描述',
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 256,
    default: '',
    comment: '地点',
  })
  location: string;

  @Column({
    type: 'int',
    comment: '价格',
  })
  price: number;

  @Column({
    type: 'varchar',
    length: 256,
    comment: '活动日期',
  })
  date: string;

  @Column({
    type: 'int',
    comment: '报名数',
  })
  applies: number;

  @Column({
    type: 'boolean',
    comment: '是否已报名',
  })
  applied: boolean;

  @Column({
    type: 'int',
    comment: '收藏数',
  })
  likes: number;

  @Column({
    type: 'boolean',
    comment: '是否收藏',
  })
  liked: boolean;

  @Column({
    type: 'varchar',
    length: 256,
    comment: '图片路径',
  })
  src: string;
}
