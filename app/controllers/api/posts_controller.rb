class Api::PostsController < ApplicationController
    before_action :require_logged_in

    def index
        @posts = Post.all
        # debugger
        if @posts
            render 'api/posts/index'
        else
            render json: ['Something bad happened, sorry'], status: 404
        end
    end

    def show
        @post = Post.find_by(id: params[:id])
        render 'api/posts/show'
    end

    def create
        # debugger
        @post = Post.new(post_params)
        @post.user_id = current_user.id

        if params[:post][:media_element] 
            @post.media_element.attach(params[:post][:media_element])
        end

        if @post.save
            render 'api/posts/show'
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find(params[:id])

        # if params[:media_element]
        #     new_media_element = params[:media_element] 
        #     @post.media_element.attach(new_media_element)
        # end

        if @post.update(post_params)
            render 'api/posts/show'
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = nil
        # @post = Post.where(user_id: current_user.id).find(params[:id])
        @post = Post.find(params[:id])
        
        if @post.destroy!
            # render 'api/posts/show'
            render json: @post
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    private

    def post_params
        params.require(:post).permit(:user_id, :title, :post_type, :body, :media_element)
    end
end
