type Log = (text: string, ...args: any) => void;

export interface LoggerActions {
  info: Log;
  warn: Log;
  success: Log;
  error: Log;
}
