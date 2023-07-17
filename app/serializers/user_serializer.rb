class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :user_posts, :commented_posts, :liked_posts

  def user_posts
    object.user_posts.map { |user_post| {id: user_post.id, title: user_post.title, content: user_post.content}}
  end

  def commented_posts
    object.commented_posts.map { |commented_post| {id: commented_post.id, title: commented_post.title} }
  end

  def liked_posts
    object.liked_posts.map { |liked_post| {id: liked_post.id, title: liked_post.title}}
  end
end
