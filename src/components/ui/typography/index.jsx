export const Typography = (props) => {
  // **Props
  const { tag: Tag = "div", color = "black", variant = "paragraph1", center = false, children, className: classes = "", ...rest } = props;

  const getClasses = () => {
    let className = classes ? `typography ${classes}` : "typography";

    switch (variant) {
      case "h2": {
        className += " h2";
        break;
      }
      case "h3": {
        className += " h3";
        break;
      }
      case "h4": {
        className += " h4";
        break;
      }
      case "paragraph1": {
        className += " paragraph1";
        break;
      }
      case "paragraph2": {
        className += " paragraph2";
        break;
      }
      default: {
        break;
      }
    }

    switch (color) {
      case "black": {
        className += " black";
        break;
      }
      case "white": {
        className += " white";
        break;
      }
      default: {
        break;
      }
    }

    if (center) className += " center";

    return className;
  };

  return (
    <Tag className={getClasses()} {...rest}>
      {children}
    </Tag>
  );
};
