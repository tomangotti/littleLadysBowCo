class Bow < ApplicationRecord
    has_one_attached :photo
    has_many :carts
    has_many :users, through: :carts
end
