import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const before = Date.now()
    res.on('close', () => {
      const { statusCode } = res
      const { method } = req
      
      const after = Date.now()
      console.log(`[${method}] ${statusCode} - ${after - before}ms`)
    })

    next()
  }
}