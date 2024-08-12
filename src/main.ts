import { NestFactory } from '@nestjs/core'
import { RootModule } from './modules/root/rootModule'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(RootModule)
  const configService: ConfigService = app.get(ConfigService)
  const port = configService.get<number>('SERVER_PORT')!

  await app.listen(port)

  console.log(`Server listening on port ${port}`)
}

bootstrap()
