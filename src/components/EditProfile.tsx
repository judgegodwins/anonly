import { Form, FormikProvider } from "formik";
import { usePost } from "hooks/apiHooks";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { updateUsername } from "slices/auth";
import { User } from "types/auth";
import { object, string } from "yup";
import LoadingButton from "./LoadingButton";
import Padding from "./Padding";
import TextField from "./TextField";

const Schema = object({
  username: string().required("Username is required"),
});

export const EditProfile = () => {

  const { user } = useAppSelector(({ auth }) => auth);
  const dispatch = useAppDispatch();

  const { formik } = usePost({
    url: "/auth/profile/username",
    initialValues: { username: user?.username },
    schema: Schema,
    type: 'patch',
    onComplete: (data: User) => {
      dispatch(updateUsername(data.username))
    }
  });

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
        <Padding padding={[0, 0, 20, 0]}>
          <TextField
            {...formik.getFieldProps('username')}
            placeholder="Enter username"
            background="primary"
            // onChange={handleChange}
            error={Boolean(formik.touched.username && formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            // value={values.username}
          />
        </Padding>
        <LoadingButton type="submit" isLoading={formik.isSubmitting} fullWidth>Save changes</LoadingButton>
      </Form>
    </FormikProvider>
  );
};

export default EditProfile;
