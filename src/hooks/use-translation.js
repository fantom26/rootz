import { mergeDeep } from "utils/helpers";
import { translations } from "utils/translations";

export const useTranslation = () => {
  const defaultTranslation = translations["en"];

  return mergeDeep({}, defaultTranslation);
};
