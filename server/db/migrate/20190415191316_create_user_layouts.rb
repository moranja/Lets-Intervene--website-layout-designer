class CreateUserLayouts < ActiveRecord::Migration[5.2]
  def change
    create_table :user_layouts do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :layout, foreign_key: true

      t.timestamps
    end
  end
end
