import { JwtPayloadDto } from '../../auth/dto/jwt-payload.dto';

export interface RequestWithUser extends Request {
  user: JwtPayloadDto;
}
