1 - set up scope '/api'

2 - make a client folder in rails root, and yo angular client in it. Accept the defaults.

3 - set up a proxy "npm install --save-dev grunt-connect-proxy"

4 - make sure the grunt.js file forwards 9000 requests to 3000.

4 - make a model and a controller. Because we used SCOPE instead of NAMESPACE, we don't need to put it in an api module. 

5 - check that http://localhost:9000/api/todos gets forwarded to the rails server.

6 - replaced ng-route with ui.router, removed unnecessary controllers and views. Ready for authentication.

7 - devise_token_auth to gemfile

7.5 - make a UserSessionsController. What's cool is that the ng_token_auth module adds a bunch of $rootscope methods to your app. These are methods available on every page, not assigned to a particular controller. You can check this in the source code for ng_token_auth:

```
// around lines 141 -> 156
$rootScope.user = this.user;
$rootScope.authenticate = angular.bind(this, this.authenticate);
$rootScope.signOut = angular.bind(this, this.signOut);
$rootScope.destroyAccount = angular.bind(this, this.destroyAccount);
$rootScope.submitRegistration = angular.bind(this, this.submitRegistration);
$rootScope.submitLogin = angular.bind(this, this.submitLogin);
$rootScope.requestPasswordReset = angular.bind(this, this.requestPasswordReset);
$rootScope.updatePassword = angular.bind(this, this.updatePassword);
$rootScope.updateAccount = angular.bind(this, this.updateAccount);
```  

8 - In the user model, you must have this:

```ruby 
  before_validation do
    self.provider = "email"
  end
```

and remember to change the application controller to:

```ruby
class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
end
```

9 - Handling authentication failure
	use $scope.$on('name of event', function(){
		// console.log("name of event just happened")
	})

// Still to do - SECURING PAGES AND API ENDPOINTS
