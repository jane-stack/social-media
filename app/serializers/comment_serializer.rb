class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :user

  def user
    {
      id: object.user.id,
      username: object.user.username,
    }
  end
end
