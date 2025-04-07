export class ClientError extends Error {
  constructor(message: string, e?: string) {
    super(message, { cause: e });
    this.name = "ClientError";
  }
}
