const UsersController = require("./controller/users.controller");
const UserValidationMiddleware = require("./middleware/users.middleware");

exports.routesConfig = function (app) {
  app.post("/users", [
    UserValidationMiddleware.validateUserBodyFields,
    UserValidationMiddleware.CheckIfUserAlreadyExists,
    UsersController.createUser,
  ]);

  app.get("/users", [
    UserValidationMiddleware.validReqBodyNeeded,
    UserValidationMiddleware.validateUser,
    UsersController.getUserRecords,
  ]);

  app.patch("/users/:userId", [
    UserValidationMiddleware.validateUserExists,
    UserValidationMiddleware.validateUserBodyFields,
    UsersController.patchUserById,
  ]);

  app.delete("/users/:userId", UsersController.removeUserById,);
};
