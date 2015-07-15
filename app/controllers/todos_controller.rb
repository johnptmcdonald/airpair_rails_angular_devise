	class TodosController < ApplicationController
		before_filter :authenticate_user!
		
		def index
			render json: current_user
		end


	end