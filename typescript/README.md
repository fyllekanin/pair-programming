# Typescript

This exercise have a working index.html file you can find at src/public/index.html which will do a login request and after the login (successfull or not)
it will do a request a protected resource.

The exercise is to add the login code at src/rest-services-impl/auth/authentication-controller.impl.ts so that it correctly check the name and password
and create a token for the user which is later verified in src/rest-services-impl/middlewares/initial.middleware.ts
