import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { TokenPayload } from "../interfaces/token-payload";
import { UsersService } from "../users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    // why private readonly on user service, and not on the config service ?
    constructor(configService:ConfigService, private readonly userService: UsersService){
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (requset:Request)=> requset?.cookies?.Authentication
            ]),
            secretOrKey: configService.getOrThrow<string>('JWT_SECRET') // what does this line do ?
        })
    }

    async validate({userId}: TokenPayload){
        return this.userService.getUser({_id: userId})
    }


}