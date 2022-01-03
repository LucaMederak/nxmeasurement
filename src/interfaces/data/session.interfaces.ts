export interface ISessionData {
  user: string;
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAccessTokenData {
  accessToken: string;
  refreshToken: string;
}
