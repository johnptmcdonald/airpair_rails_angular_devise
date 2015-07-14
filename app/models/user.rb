class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          # :confirmable, 
          :omniauthable
  include DeviseTokenAuth::Concerns::User

  before_validation do
    self.provider = "email"
  end

end


# user = User.new
# user.email = "johnptmcdonald@gmail.com"
# user.password = "password"
# user.password_confirmation = "password"