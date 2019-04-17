class LayoutsController < ApplicationController
    def index 
        render json: = Layout.all
    end 

    def show 
        render json: = Layout.find(params[:id])
    end 

    def edit
        render json: = layout.find(params[:id])
        
    end 
end 
