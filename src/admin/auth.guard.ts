import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const cookie = request.cookies['jwt'];

    if (!cookie) {
      throw new UnauthorizedException('No JWT token found');
    }
    const data = await this.jwtService.verifyAsync(cookie);
    if (!data) {
        throw new UnauthorizedException('Invalid JWT token');
    }
    return true;
  }
}
