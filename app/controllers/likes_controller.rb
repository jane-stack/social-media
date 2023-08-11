class LikesController < ApplicationController
    before_action :find_post, only: [:create, :destroy]
    before_action :find_like, only: [:destroy]
    before_action only: [:destroy] do
        authorize_user_resource(@like.user_id)
    end

    def likes
        render json: Like.all
    end

    def create
        @like = current_user.likes.new(post: @post)
        if @like.save
            render json: @like
        else
            render json: {errors: @like.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        @like = current_user.likes.find(params[:id])
        @like.destroy
        render json: {message: "Unliked"}
    end

    private

    def find_post
        @post = Post.find(params[:post_id])
    end

    def find_like
        @like = @post.likes.find(params[:id])
    end
end
