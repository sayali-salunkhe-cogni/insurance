export interface CustomRequest extends Express.Request {
  user?: any; // Add user type if using authentication
}

export interface CustomResponse extends Express.Response {
  // Extend with custom response methods if needed
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}