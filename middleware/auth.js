const { User } = require("../models/user");

let auth = (req, res, next) => {
  // cookie에 저장되어있는 token 호출
  let token = req.cookies.x_auth;

  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user)
      return res.json({
        isAuth: false,
        error: true,
      });

    req.token = token;
    req.user = user;
    next()
  });
};

module.exports = { auth };
