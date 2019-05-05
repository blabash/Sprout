class RemoveTypeColumnFromPostsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :type
  end
end
