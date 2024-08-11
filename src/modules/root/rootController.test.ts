import { Test, TestingModule } from '@nestjs/testing'
import { RootController } from './rootController'
import { RootService } from './rootService'

describe('RootController', () => {
  let appController: RootController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RootController],
      providers: [RootService],
    }).compile()

    appController = app.get<RootController>(RootController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!')
    })
  })
})
