import { FormProvider } from "react-hook-form";

import { ControlledInput } from "./input";

const Form = (props) => {
  // **Props
  const { methods, children, onSubmit } = props;

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  );
};

Form.Input = ControlledInput;
export { Form };
