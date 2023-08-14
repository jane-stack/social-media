class LikeSerializer < ActiveModel::Serializer
  attributes :id, :post, :user

  def post
    {
      id: object.post.id,
      title: object.post.title,
      content: object.post.content
    }
  end

  def user
    {
      id: object.user.id,
      username: object.user.username,
    }
  end
end
