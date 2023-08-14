class LikesController < ApplicationController
    before_action :find_post, only: [:index]

    def total
        render json: Like.all
    end

    def create
        @like = current_user.likes.new(post_id: params[:post_id])
        if @like.save
            render json: {success: true}
        else
            render json: {success: false, errors: @like.errors.full_messages}
        end
    end

    def destroy
        @like = current_user.likes.find_by(post_id: params[:post_id])
        if @like.destroy
            render json: {success: true}
        else
            render json: {success: false, errors: @like.errors.full_messages}
        end
    end

    def index
        @liked = current_user.likes.exists?(post_id: @post.id)
        render json: {liked: @liked}
    end

    private

    def find_post
        @post = Post.find(params[:post_id])
    end

end
