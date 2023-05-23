class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :address, :fname, :lname
end
