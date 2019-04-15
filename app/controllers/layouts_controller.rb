class LayoutsController < ApplicationController
    def index 
        @layout = Layout.all
    end 

    def show 
        @layout = Layout.find(params[:id])
    end 

    def edit
        @layout = layout.find(params[:id])
        
    end 
end 
