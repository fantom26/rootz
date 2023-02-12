import { Controller, useFormContext } from "react-hook-form";

export const Input = (props) => {
  // **Props
  const { type = "text", disabled = false, error, helperText, ...rest } = props;

  const getClasses = () => {
    let classNames = "form-input ";

    if (error) classNames += "error";

    return classNames;
  };

  return (
    <div className={getClasses()}>
      <label className="form-input__wrapper">
        <input type={type} disabled={disabled} {...rest} />
      </label>
      {helperText && <span className="form-error">{helperText}</span>}
    </div>
  );
};

export const ControlledInput = (props) => {
  // **Props
  const { name, defaultValue = "", helperText = "", ...rest } = props;

  // **Form
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <Input value={field.value || ""} onChange={field.onChange} error={!!error} helperText={error?.message || helperText} {...rest} />
      )}
    />
  );
};
