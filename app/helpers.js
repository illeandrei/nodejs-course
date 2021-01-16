"user strict";

module.exports = {
  responseToJson,
};

function responseToJson(propsItem) {
  return function (req, res, next) {
    res.json(req.resources[propsItem]);
  };
}
