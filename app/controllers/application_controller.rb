class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  respond_to :json
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session


end
