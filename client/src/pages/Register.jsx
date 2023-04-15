import { useFormik } from "formik";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../components";
import { registerSchema } from "../../schema/registerSchema";
import { authFetch } from "../../helpers/authFetch";

const Register = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const res = await authFetch.post("/auth/register", values);
      if (res.status === 201 && res.data.userDetails) {
        toast({
          status: "success",
          description: `Welcome ${res.data.userDetails?.username}`,
        });
        navigate("/");
        return;
      }
    } catch (error) {
      toast({
        title: "Error",
        status: "error",
        description: error.response.data,
      });
    }
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: registerSchema,
  });

  return (
    <AuthForm
      isLogin={false}
      handleChange={handleChange}
      values={values}
      onSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default Register;
