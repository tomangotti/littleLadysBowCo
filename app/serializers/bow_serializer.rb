class BowSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :price, :description, :quantity, :style, :photo

  def photo
    rails_blob_path(object.photo, only_path: true) if object.photo.attached?
  end
end
