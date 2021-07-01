# Typescript

Fix the login system to help the user getting access to the protected content.

## Technologies

* Express (https://expressjs.com/)
* Jsonwebtoken (https://www.npmjs.com/package/jsonwebtoken)
* Overnight (https://github.com/seanpmaxwell/overnight)

## Task

After you have installed and started the project, you can head to http://localhost:3000. On this
page you can see that we are not authorized to see the content.

The index.html file is trying to first login and then fetch the protected content, but we are missing
code in the login to return the correct authorization data. The task is to make the login work.

Location for login: [auth controller](src/rest-services-impl/auth/authentication-controller.impl.ts)

Verification of the authorization data is done at: [middleware](src/rest-services-impl/middlewares/initial.middleware.ts)