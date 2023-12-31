class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :creator, :comments, :likes

  def creator
    {
      id: object.creator.id,
      name: object.creator.name,
      username: object.creator.username
    }
  end

end
