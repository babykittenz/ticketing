import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  // step one define status code
  statusCode = 404;
  // step two define constructor with error log message
  constructor() {
    super("Route not found");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  // step three define serialize error messages to send to client
  serializeErrors() {
    return [{ message: "Not Found" }];
  }
}
