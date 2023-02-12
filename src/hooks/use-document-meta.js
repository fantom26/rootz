import { useEffect, useRef } from "react";

export const useMetaData = (props) => {
  const { title, description, prevailOnUnmount = false } = props;
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
    document.querySelector("meta[name='description']")?.setAttribute("content", `${description}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};
