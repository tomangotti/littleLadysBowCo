class CreateBows < ActiveRecord::Migration[7.0]
  def change
    create_table :bows do |t|
      t.string :name
      t.integer :price
      t.string :description
      t.integer :quantity
      t.string :style

      t.timestamps
    end
  end
end
