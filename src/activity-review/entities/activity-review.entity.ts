import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('activityReview')
export class ActivityReview {
  @PrimaryGeneratedColumn()
  id: number;

  // 创建时间
  @CreateDateColumn()
  createTime: Date

  // 更新时间
  @UpdateDateColumn()
  updateTime: Date

  @Column('text')
  username:string;

  @Column({default:0})
  activity_id:number;

  @Column({default:0})
  cate_id:number;

  @Column('text')
  content:string;
}
