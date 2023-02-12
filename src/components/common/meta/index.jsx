import { useMetaData } from "hooks";

export const Meta = (props) => {
  const { component, title, description } = props;

  useMetaData({ title, description });

  return <>{component}</>;
};
