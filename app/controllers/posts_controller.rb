class PostsController < ApplicationController
    before_action :find_post, only: [:show, :update, :destroy]
    before_action :unprocessable_entity_if_not_found, only: [:update, :destroy]
    before_action :authorize, only: [:index, :create]
    before_action only: [:update, :destroy] do
        authorize_user_resource(@post.creator_id)
    end

    def index
        @post = Post.all
        render json: @post
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

    def update
        @post.creator = current_user
        @post.update(post_params)
        render json: @post
    end

    def destroy
        @post.creator = current_user
        @post.destroy
        render json: {message: "Post Deleted"}
    end

    private

    def post_params
        params.permit(:title, :content)
    end

    def find_post
        @post = Post.find_by_id(params[:id])
    end

    def unprocessable_entity_if_not_found
        render json: {message: "Post not found"}, status: :unprocessable_entity unless @post
    end
end
