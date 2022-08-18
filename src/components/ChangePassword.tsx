import { Form, FormikProvider } from "formik";
import { object, string } from "yup";
import { usePost } from "hooks/apiHooks";
import LoadingButton from "./LoadingButton";
import Padding from "./Padding";
import TextField from "./TextField";

const Schema = object({
  oldPassword: string().required("Old password is required"),
  newPassword: string()
    .min(8, "New password should be up to 8 characters long")
    .required("New password is required"),
});

export const ChangePassword = () => {
  const { data, error, formik } = usePost({
    url: "/auth/update/password",
    initialValues: { oldPassword: "", newPassword: "" },
    schema: Schema,
    type: "patch",
    notify: true,
  });

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
        <Padding padding={[0, 0, 20, 0]}>
          <TextField
            {...formik.getFieldProps("oldPassword")}
            id="old-password"
            placeholder="Old password"
            background="primary"
            type="password"
            // onChange={handleChange}
            error={Boolean(
              formik.touched.oldPassword && formik.errors.oldPassword
            )}
            helperText={formik.touched.oldPassword && formik.errors.oldPassword}
            // value={values.username}
          />
        </Padding>
        <Padding padding={[0, 0, 20, 0]}>
          <TextField
            {...formik.getFieldProps("newPassword")}
            id="new-password"
            placeholder="New password"
            background="primary"
            type="password"
            // onChange={handleChange}
            error={Boolean(
              formik.touched.newPassword && formik.errors.newPassword
            )}
            helperText={formik.touched.newPassword && formik.errors.newPassword}
            // value={values.username}
          />
        </Padding>
        <LoadingButton type="submit" isLoading={formik.isSubmitting} fullWidth>
          Save changes
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
};

export default ChangePassword;
