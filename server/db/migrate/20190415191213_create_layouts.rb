class CreateLayouts < ActiveRecord::Migration[5.2]
  def change
    create_table :layouts do |t|
      t.string :name
      t.belongs_to :user, foreign_key: true
      t.text :html

      t.timestamps
    end
  end
end
