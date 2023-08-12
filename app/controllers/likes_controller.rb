class LikesController < ApplicationController
    before_action :find_post

    def index
        render json: @post.likes.all
    end

    def create
        @post.likes.create(user_id: current_user.id)
        head :ok
    end

    def destroy
        @post.likes.find_by(user_id: current_user.id).destroy
        head :ok
    end

    private

    def find_post
        @post = Post.find(params[:post_id])
    end

end
