class CommentsController < ApplicationController
    before_action :find_post

    def index
        @comment = @post.comments
        render json: @comment
    end

    def create
        @comment = @post.comments.create(comment_params)
        @comment.user = current_user
        if @comment.save
            render json: @comment, status: 201
        else
            render json: {errors: @comment.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        @comment = @post.comments.find(params[:id])
        @comment.update(comment_params)
        if @comment.save
            render json: @comment, status: 201
        else
            render json: {errors: @comment.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        @comment = @post.comments.find(params[:id])
        @comment.destroy
        render json: {message: "Comment Deleted"}
    end

    private

    def find_post
        @post = Post.find(params[:post_id])
    end

    def comment_params
        params.permit(:body)
    end

end
