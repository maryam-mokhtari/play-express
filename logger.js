function logger(req, res, next) {
  console.log("logger:", req.originalUrl);
  next()
  console.log("logger2!");
}

module.exports = logger
