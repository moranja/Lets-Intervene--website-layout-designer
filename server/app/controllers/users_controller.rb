class UsersController < ApplicationController
    def index
       render json: User.all
    end 

    def create
        #write the code to create a new User instance
      user =  User.create(user_params)
      render json: user

    end

    def show 
        render json: User.find(params[:id])
    end 
     def user_params
        params.permit(:name)
     end 
end
