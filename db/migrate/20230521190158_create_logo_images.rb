class CreateLogoImages < ActiveRecord::Migration[7.0]
  def change
    create_table :logo_images do |t|

      t.timestamps
    end
  end
end
