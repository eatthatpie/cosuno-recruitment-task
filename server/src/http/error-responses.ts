export class ErrorResponse {
  constructor(public type: string = '', public message: string = '') {}

  toJSON() {
    return {
      message: this.message,
      type: this.type
    };
  }
}

export class NotFoundErrorResponse extends ErrorResponse {
  constructor() {
    super('not_found');
  }
}
