class PostsController < ApplicationController
    before_action :find_post, only: [:show]
    before_action :authorize, only: [:create]

    def index
        @post = Post.all
        render json: @event
    end

    def show
        render json: @post
    end

    def create
        @post = Post.new(post_params)
        @post.creator = current_user
        if @post.save
            render json: @post, status: 201
        else
            render json: {errors: @post.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def post_params
        params.permit(:title, :content)
    end

    def find_post
        @post = Post.find_by_id(params[:id])
    end
end
