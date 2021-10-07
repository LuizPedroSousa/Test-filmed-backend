export interface TokenRepository {
  sign(payload: any, expires?: string): Promise<string>;
}
