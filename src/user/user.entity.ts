import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn() // 创建自动生成的列
  id: number;
  /**
   * 注册时间
   * 1. 目前该字段的值会和 `createTime` 一致。
   * 2. 为保留扩展性，仍留下该字段。
   * ```
   */
  @Column({
    name: 'register_time',
    type: 'datetime',
    update: false,
    default: () => 'CURRENT_TIMESTAMP',
    comment: '注册时间',
  })
  registerTime: Date;

  /** 微信小程序的  OpenID */
  @Column({
    type: 'varchar',
    length: 32,
    update: false,
    unique: true,
    comment: '微信小程序openid，用于唯一区分小程序用户',
  })
  openid: string;

  /** 微信开放平台的 UnionID */
  @Column({
    type: 'varchar',
    length: 32,
    update: false,
    unique: true,
    default: '',
    comment: '用户在开放平台的唯一标识符',
  })
  unionid: string;

  /** 账户手机号 */
  @Column({
    type: 'char',
    length: 11,
    default: '',
    comment: '账户手机号，可用于其他客户端登录',
  })
  phone: string;
}
