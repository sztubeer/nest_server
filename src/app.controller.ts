import { Controller, Get, Global } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';


@Controller()
@ApiTags('默认')
export class AppController {}
