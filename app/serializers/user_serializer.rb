class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :address, :fname, :lname, :state, :city, :zipCode, :carts


end
