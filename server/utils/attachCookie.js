const attachCookie = ({ res, token }) => {
  const maxAge = 3 * 24 * 60 * 60 * 1000;
  res.cookie("token", token, {
    httpOnly: true,
    maxAge,
  });
};

module.exports = attachCookie;
