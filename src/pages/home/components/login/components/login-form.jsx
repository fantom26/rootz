import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Form } from "components/form";
import { Button, Typography } from "components/ui";

import { useTranslation } from "hooks";

import { LoginObject } from "utils/schemas";

export const LoginForm = () => {
  const t = useTranslation();

  // **Form
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginObject)
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    reset
  } = methods;

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log("data:", data);
    reset();
  };

  return (
    <div className="login__form">
      <Typography className="login__form-title" tag="h3" variant="h3" center>
        {t.pages.home.login.formTitle}
      </Typography>
      <Form methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Form.Input name="name" placeholder={t.forms.name.placeholder} />
        <Form.Input name="email" placeholder={t.forms.email.placeholder} />
        <Button className="login__form-btn" type="submit" isLoading={isSubmitting || !isValid}>
          {t.btn.book}
        </Button>
      </Form>
    </div>
  );
};
