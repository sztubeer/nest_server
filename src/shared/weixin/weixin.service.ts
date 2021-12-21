import { CACHE_MANAGER, Inject } from '@nestjs/common';
import WeixinConfig from '../../config/wxConfig';
import { Code2SessionResponse } from './weixin.interface';
import axios, { AxiosRequestConfig } from 'axios';
import { Cache } from 'cache-manager';

const { appid, secret } = WeixinConfig;

export class WeixinService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async code2Session(code: string): Promise<Code2SessionResponse> {
    const cacheKey = `weisin:session:code:${code}`;
    const result = await this.cacheManager.get(cacheKey);
    // if (result) {
    //   return JSON.parse(result);
    // }
    const response = await axios.request<Code2SessionResponse>({
      url: 'https://api.weixin.qq.com/sns/jscode2session',
      params: {
        appid,
        secret,
        js_code: code,
        grant_type: 'authorization_code',
      },
    });
    if (response.data.errcode) {
      // throw new HttpException(WX_INVALID_CODE, HttpStatus.NOT_ACCEPTABLE)
      throw('报错了')
    }

    /** 缓存时长：10 天 */
    this.cacheManager.set(cacheKey, JSON.stringify(response.data), {ttl: 3600 * 24 * 10})

    return response.data;
  }
}
