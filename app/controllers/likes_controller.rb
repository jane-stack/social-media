class LikesController < ApplicationController
    before_action :find_post
    before_action :find_like, only: [:destroy]

    def create
        current_user.likes.create(post: @post)
        render json: {likes_count: @post.likes.count}
    end

    def destroy
        current_user.likes.find_by(post: @post).destroy
        render json: {likes_count: @post.likes.count}
    end

    private

    def find_post
        @post = Post.find(params[:post_id])
    end

    def find_like
        @like = @post.likes.find(params[:id])
    end
end
