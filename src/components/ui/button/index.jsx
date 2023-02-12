import { HashLink } from "react-router-hash-link";

export const Button = (props) => {
  // **Props
  const {
    isLoading,
    color = "primary",
    size = "full",
    fontSize = "13",
    className: classes = "",
    children,
    hashLink = false,
    uppercase = true,
    path = "",
    ...rest
  } = props;

  const defineClasses = () => {
    let classNames = `btn ${classes}`;

    switch (color) {
      case "primary": {
        classNames += " col-primary";
        break;
      }
      case "ghost": {
        classNames += " col-ghost";
        break;
      }
      default:
        break;
    }

    switch (fontSize) {
      case "16": {
        classNames += " size-16";
        break;
      }
      case "13": {
        classNames += " size-13";
        break;
      }
      default: {
        break;
      }
    }

    // 120 -small | 145 - middle |  165 - large
    switch (size) {
      case "large": {
        classNames += " width-large";
        break;
      }
      case "middle": {
        classNames += " width-middle";
        break;
      }
      case "small": {
        classNames += " width-small";
        break;
      }
      default: {
        classNames += " width-full";
        break;
      }
    }

    if (uppercase) classNames += " uppercase";

    if (isLoading) classNames += " disabled";

    return classNames;
  };

  if (path && hashLink) {
    return (
      <HashLink smooth to={path} className={defineClasses()} {...rest}>
        {children}
      </HashLink>
    );
  }

  return (
    <button disabled={isLoading} className={defineClasses()} {...rest}>
      {children}
    </button>
  );
};
