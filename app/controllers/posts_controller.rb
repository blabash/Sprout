class PostsController < ApplicationController
    before_action :require_logged_in

    def index
        @posts = Post.all

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
        @post = Post.new(post_params)
        @post.user_id = current_user.id

        if @post.save
            render 'api/posts/show'
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find(params[:id])

        if @post.update(post_params)
            render 'api/posts/show'
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = nil
        @post = Post.where(user_id: current_user.id).find(params[:id])
        
        if @post
            if @post.destroy!
                @posts = Post.all
                render 'api/posts/show'
            else
                render json: @post.errors.full_messages, status: 422
            end
        else
            render json: ["Trying to delete someone else's post, tsk tsk"], status: 422
        end
    end

    private

    def post_params 
        params.require(:post).permit(:user_id, :title, :type, :body, :element)
    end
end
