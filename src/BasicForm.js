import { useFormik } from "formik";
import * as yup from "yup";
export function BasicForm() {
  const formValidationSchema = yup.object({
    email: yup.string().required("why not"),
    password: yup
      .string()
      .required("why no password")
      .min(8, "need a longer passwrod")
      .max(12),
  });
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          value={formik.values.email}
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="email"
        />
        {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
        <br />
        <input
          value={formik.values.password}
          id="password"
          name="password"
          onChange={formik.handleChange}
          type="password"
          minLength="8"
          placeholder="password"
        />{" "}
        {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
