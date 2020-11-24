<!-- 
This is a Q&A server - user data is hashed for login and tokens are set as well.

The default requirements for the .env configuration should look like the following:

PORT= 
NAME=
PASS=
JWT_SECRET=

You need to have node_modules and proper project dependencies installed. Run npm update to sync.

Access to the following endpoints is available:

POST User Sign In 
POST User Sign Up
POST create question
get view questions
put edit question
post create answer
get view answers
del question

 -->