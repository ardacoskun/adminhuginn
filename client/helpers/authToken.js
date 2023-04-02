export const checkToken = () => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Token: `Bearer ${token}`,
    },
  };

  return { token, config };
};

export const addTokenLocalStorage = (user) => {
  localStorage.setItem("token", user.token);
  localStorage.setItem("user", JSON.stringify(user));
};

export const deleteTokenLocalStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
