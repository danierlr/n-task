import { Module } from '@nestjs/common'
import { RootController } from './rootController'
import { RootService } from './rootService'

@Module({
  imports: [],
  controllers: [RootController],
  providers: [RootService],
})
export class RootModule {}
