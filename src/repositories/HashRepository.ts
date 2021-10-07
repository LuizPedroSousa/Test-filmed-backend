export interface HashRepository {
  generateSaltByPassword(password: string): Promise<string>;
  compare(password: string, hashedPassword: string): Promise<boolean>;
}
