interface Model {
  code: number;
  fields?: FieldError[];
  message: string;
}

export class AppError extends Error {
  public code: number;
  public error?: Error;

  constructor(code: number, message: string, error?: Error) {
    super(message);

    this.code = code;
    this.error = error;
  }

  public toModel(): Model {
    return {
      code: this.code,
      message: this.message,
    };
  }
}

export class ValidationError extends AppError {
  constructor(message: string, error?: Error) {
    super(30000, message, error);
  }
}

export class FieldValidationError extends AppError {
  public fields: FieldError[];

  constructor(message: string, fields: FieldError[], error?: Error) {
    super(30001, message, error);
    this.fields = fields;
  }

  public toModel(): Model {
    return {
      code: this.code,
      fields: this.fields,
      message: this.message,
    };
  }
}

export interface FieldError {
  message: string;
  type: string;
  path: string[];
}
