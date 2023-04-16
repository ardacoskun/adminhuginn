import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useToast } from "@chakra-ui/react";
import { Profile } from "../components";
import { profileSchema } from "../../schema/profileSchema";
import { authFetch } from "../../helpers/authFetch";

const ProfilePage = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const { user } = cookies;

  const onSubmit = async (values) => {
    console.log("user", user);
    try {
      const { status, data } = await authFetch.put(
        `/user/${user?._id}`,
        values
      );

      if (status === 200 && data.user) {
        const token = data?.token;
        const userInfo = data?.user;

        setCookie("token", token);
        setCookie("user", userInfo);
        toast({
          status: "success",
          description: "User updated successfully",
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

  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      username: user?.username,
      email: user?.email,
      isAdmin: user?.isAdmin,
    },
    enableReinitialize: true,
    onSubmit,
    validationSchema: profileSchema,
  });

  return (
    <Profile
      values={values}
      handleChange={handleChange}
      onSubmit={handleSubmit}
      setFieldValue={setFieldValue}
    />
  );
};

export default ProfilePage;
