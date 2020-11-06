<!-- 
This is a Q&A server - user data is hashed for login and tokens are set as well.

The default requirements for the .env configuration should look like the following:

PORT= 
NAME=
PASS=
JWT_SECRET=

You need to have node_modules and proper project dependencies installed. Run npm update to sync.

Access to the following endpoints is available:

USER Specific
/user/signup	POST	Allows a new user to be created with a username and password.
/user/signin	    POST	   Allows log in with an existing user.


 -->