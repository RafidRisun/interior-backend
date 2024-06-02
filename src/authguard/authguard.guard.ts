import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const cookie = request.cookies['jwt'];

    if (!cookie) {
      throw new UnauthorizedException('No JWT token found');
    }
    const data = this.jwtService.verifyAsync(cookie);
    if (!data) {
        throw new UnauthorizedException('Invalid JWT token');
    }
    return true;
  }
}
