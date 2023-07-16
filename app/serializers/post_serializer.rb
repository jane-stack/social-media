class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :creator

  def creator
    {
      id: object.creator.id,
      name: object.creator.name,
      username: object.creator.username
    }
  end
  
end
