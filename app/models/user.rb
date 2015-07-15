class User < ActiveRecord::Base
  include DeviseTokenAuth::Concerns::User
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  

  before_validation do
    self.provider = "email"
  end

  before_save -> do
    skip_confirmation!
  end

end


# user = User.new
# user.email = "johnptmcdonald@gmail.com"
# user.password = "password"
# user.password_confirmation = "password"