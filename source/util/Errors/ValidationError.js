export class ValidationError extends Error {
  constructor(message, statusCode) {
    super();
    this.name = 'ValidationError';
    this.message = message;
    this.statusCode = statusCode;
  }

  getPassword() {
    return process.env.PASSWORD;
  }

  getPort() {
    return process.env.PORT;
  }
}
