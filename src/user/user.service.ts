import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WeixinService } from 'src/shared/weixin/weixin.service';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly weixinService: WeixinService,
  ) {}

  async findOrCreateUser(openid: string, unionid: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { openid } });

    if (user) return user;

    const newUser = this.userRepository.create();
    newUser.openid = openid;
    newUser.unionid = unionid;

    await this.userRepository.save(newUser);
    return newUser;
  }

  async getUserIdByCode(code: string): Promise<any> {
    const { openid, unionid } = await this.weixinService.code2Session(code);
    const user = await this.findOrCreateUser(openid, unionid);
    return user.id;
  }
}
