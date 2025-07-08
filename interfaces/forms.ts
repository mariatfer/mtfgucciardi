export interface FormData {
  name: string;
  lastName: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  lastName?: string;
  email?: string;
  message?: string;
}
