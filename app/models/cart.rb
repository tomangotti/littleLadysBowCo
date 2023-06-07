class Cart < ApplicationRecord
  belongs_to :bow
  belongs_to :user
end
