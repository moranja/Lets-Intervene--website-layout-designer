class Layout < ApplicationRecord
    has_many: user_layouts
    has_many: users, through: user_layouts
end
