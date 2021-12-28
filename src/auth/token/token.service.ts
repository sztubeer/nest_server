import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { Cache } from 'cache-manager';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TokenService {
  
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  private getTokenCacheKey(token: string):string{
    return `auth:user_id:token:${token}`;
  }

  async createToken(userId:number,expiration: number = 3600 * 24 * 10):Promise<string>{
    if (userId < 1) {
      // this.logger.error(`尝试创建一个异常登录凭证， userId => ${userId}`)
      throw('登录失败！')
    }

    const token:string = uuidv4().replace(/-/gu, '');

    const rKey:string = this.getTokenCacheKey(token)
    await this.cacheManager.set(rKey,userId,{ttl:expiration});
    return token;
  }

  async getUserIdByToken(token:string):Promise<number> {
    const rKey = this.getTokenCacheKey(token);

    const result = await this.cacheManager.get(rKey);

    if(result){
      return Number(result);
    }
    return 0;
  }

  async disableToken(token:string):Promise<boolean> {
    const rKey = this.getTokenCacheKey(token);
    const result = await this.cacheManager.del(rKey);

    return !!result;
  }
}
