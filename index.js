const dependency = require("./dependency");

const ModuleUnderTest = () => {
  const data = dependency()();
  return data;
};

module.exports = ModuleUnderTest;
