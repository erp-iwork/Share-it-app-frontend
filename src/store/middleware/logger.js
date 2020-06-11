const logger = (param) => (store) => (next) => (action) => {
  console.log("Logging", action);
  next(action);
};

export default logger;
