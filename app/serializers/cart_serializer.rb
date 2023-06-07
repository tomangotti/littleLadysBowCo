class CartSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  has_one :bow
  # has_one :user
end
