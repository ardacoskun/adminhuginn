import * as Yup from "yup";

export const profileSchema = Yup.object({
  username: Yup.string()
    .required("Full Name is required.")
    .min(3, "Full Name must be at least 3 characters."),
  email: Yup.string().required("Email is required.").email("Email is invalid."),
  isAdmin: Yup.boolean(),
});
