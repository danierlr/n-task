import { Controller, Get } from '@nestjs/common'

@Controller('api/v1')
export class ServerStatusController {
  constructor() {}

  @Get('status')
  async getServerStatus(): Promise<string> {
    return 'server is up and running'
  }
}
