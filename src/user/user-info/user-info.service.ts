import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserInfoRequestDto } from './user-info.dto';
import { UserInfo } from './user-info.entity';

@Injectable()
export class UserInfoService {
  constructor(
    @InjectRepository(UserInfo)
    private readonly userInfoRepository: Repository<UserInfo>,
  ) {}

  private async getUserInfoEntity(userId: number): Promise<UserInfo> {
    const result = await this.userInfoRepository.findOne(userId);
    if (result) return result;
    const newUserInfo = this.userInfoRepository.create({ id: userId });
    return this.userInfoRepository.save(newUserInfo);
  }

  async getUserInfo(userId: number): Promise<UserInfo> {
    const userInfo = await this.getUserInfoEntity(userId);
    return userInfo;
  }

  async updateUserInfo(
    userId: number,
    data: UpdateUserInfoRequestDto,
  ): Promise<UserInfo> {
    const userInfo = await this.getUserInfoEntity(userId);
    this.userInfoRepository.merge(userInfo, data);
    await this.userInfoRepository.save(userInfo);

    return userInfo;
  }
}
