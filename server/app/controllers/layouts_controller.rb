class LayoutsController < ApplicationController
  def index
      render json: Layout.all,
          include: {user: {except: [:id, :created_at, :updated_at]}}
  end

  def create
    layout = Layout.create(layout_attributes)
    render json: layout
  end

  def show
      render json: Layout.find(params[:id])
  end

  def edit
      render json: Layout.find(params[:id])
  end

  private

  def layout_attributes
    params.permit(:name, :user_id, :img, :html)
  end
end