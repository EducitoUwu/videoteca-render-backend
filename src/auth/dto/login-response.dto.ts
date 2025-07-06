import { IUser } from '../../users/types/user.interface';

export interface LoginResponse {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}
