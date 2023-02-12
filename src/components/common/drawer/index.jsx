import { createPortal } from "react-dom";

export const Drawer = (props) => {
  // **Props
  const { visible, children, className } = props;

  return createPortal(
    <div className={visible ? "drawer open" : "drawer"}>
      <div className={className ? `drawer-content ${className}` : "drawer-content"}>{children}</div>
    </div>,
    document?.body
  );
};
