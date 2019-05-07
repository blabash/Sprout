class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    
    if @like.save
      render json: @like
    else
      render json: @like.errors.full_messages
    end
  end

  def destroy
    @like = Like.where({ user_id: current_user.id, post_id: params[:id] })[0]
    # debugger
    if @like && @like.destroy
      render json: @like
    else
      render json: ['Could not find that Like'], status: 422
    end
  end

  private
    def like_params 
      params.require(:like).permit(:user_id, :post_id)
    end
end
