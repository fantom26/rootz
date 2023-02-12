import { object, string } from "yup";

export const SearchObject = object({
  search: string().required()
});
