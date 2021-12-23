export interface IHashProvider {
  generateSaltByPassword(password: string): Promise<string>;
  compare(password: string, hashedPassword: string): Promise<boolean>;
}
