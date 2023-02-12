import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Form } from "components/form";
import { Button } from "components/ui";

import { useTranslation } from "hooks";

import { SearchObject } from "utils/schemas";

export const SearchForm = () => {
  const t = useTranslation();

  // **Form
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(SearchObject)
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
    <div className="hero__form">
      <Form methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="hero__form-input-wrapper">
          <Form.Input name="search" placeholder={t.forms.search.placeholder} />
          <Button className="hero__form-btn" size="small" type="submit" isLoading={isSubmitting || !isValid}>
            {t.btn.search}
          </Button>
        </div>
      </Form>
    </div>
  );
};
