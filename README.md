1 - set up scope '/api'

2 - make a client folder in rails root, and yo angular client in it. Accept the defaults.

3 - set up a proxy "npm install --save-dev grunt-connect-proxy"

4 - make sure the grunt.js file forwards 9000 requests to 3000.

4 - make a model and a controller. Because we used SCOPE instead of NAMESPACE, we don't need to put it in an api module. 

5 - check that http://localhost:9000/api/todos gets forwarded to the rails server.

6 - replaced ng-route with ui.router, removed unnecessary controllers and views. Ready for authentication.

7 - devise_token_auth to gemfile