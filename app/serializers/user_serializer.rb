class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :user_posts

  def user_posts
    object.user_posts.map { |user_post| {id: user_post.id, title: user_post.title, content: user_post.content}}
  end
end
