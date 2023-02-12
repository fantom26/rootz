import { object, string } from "yup";

export const LoginObject = object({
  name: string().min(2, "Name should be 2-30 characters").max(30, "Name should be 2-30 characters").required(),
  email: string().email("Email must be a valid").required()
});
