export interface ITokenProvider {
  sign(payload: any, expires?: string): string;
  verify(token: string): any; // payload
}
