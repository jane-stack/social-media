class CommentsController < ApplicationController
    before_action :find_post
    before_action :find_comment, only: [:update, :destroy]
    before_action :unprocessable_entity_if_not_found, only: [:update, :destroy]
    before_action only: [:update, :destroy] do
        authorize_user_resource(@comment.user_id)
    end

    def index
        @comment = @post.comments
        render json: @comment
    end

    def create
        @comment = @post.comments.new(comment_params)
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
    
    def find_comment
        @comment = Comment.find_by_id(params[:id])
    end

    def comment_params
        params.permit(:body)
    end

    def unprocessable_entity_if_not_found
        render json: {message: "Comment not found"}, status: :unprocessable_entity unless @comment
    end

end
