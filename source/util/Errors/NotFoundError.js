export class NotFoundError extends Error {
  constructor(message, statusCode) {
    super();
    this.name = 'NotFoundError';
    this.message = message;
    this.statusCode = statusCode;
  }
}
