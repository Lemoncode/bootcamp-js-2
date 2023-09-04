const isValidLogin = (req, res, next) => {
  const { user, password } = req.body;
  const isValid = user === 'admin@email.com' && password === 'test';
  res.status(200).json(isValid);
};

module.exports = (req, res, next) => {
  if (req.path === '/login') {
    isValidLogin(req, res, next);
  } else {
    next();
  }
};
