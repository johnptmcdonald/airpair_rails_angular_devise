--------
This is a seed app for an authenticated angular on rails app.

All the angular stuff is kept in the client folder in the rails root. 

The seed app uses ng_token_auth and devise_token_auth to authenticate users, and uses a Todo resource to illustrate a secured rails API endpoint. The app skips user email confirmation.

The app is built in Rails 4.2.1 and Angular 1.4.2, with a Postgres database.

To get set up locally just clone the repo, then:

* make sure you have Compass installed:

```
$ gem update --system && gem install compass
```

* `$ bundle install` the ruby gems 

* `$ rake db:create && rake db:migrate` the database

*  start your rails server (`$ rails s`)

* In the client folder, run `$ npm install && bower install` to include all the dependencies

* Finally run `$ grunt serve` from the client folder to start a server.

Right now, users can only be created from the command line. 

--------
<!-- 
1 - set up scope '/api'

2 - make a client folder in rails root, and yo angular client in it. Accept the defaults.

3 - set up a proxy "npm install --save-dev grunt-connect-proxy"

4 - make sure the grunt.js file forwards 9000 requests to 3000.

4 - make a model and a controller. Because we used SCOPE instead of NAMESPACE, we don't need to put it in an api module. 

5 - check that http://localhost:9000/api/todos gets forwarded to the rails server.

6 - replaced ng-route with ui.router, removed unnecessary controllers and views. Ready for authentication.
---- // I actually rolled this back, as I was having issues. It's on my TODO list to put ui.router back in.

7 - devise_token_auth to gemfile.

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

10 - to ensure the server side recognises a user, you need to have skipped confirmation in the User model:

```
  before_save -> do
    skip_confirmation!
  end
```

and obv make sure your ApplicationController has:

```
include DeviseTokenAuth::Concerns::SetUserByToken
```

LASTLY - The client is effectively on the same domain as the server, so didn't need to account for CSRF using rack-cors. Needs to be changed for a complete separation of client and server.

------

To do:
- Allow user to signup

- extract $http calls to todos controller to a factory
- user can make new todos
- user can destroy todos
- user is confirmable via email
- user can log in with facebook
- user can edit their profile
- completely separate client and server

- deploy to heroku
 -->

