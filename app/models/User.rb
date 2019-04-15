class User < ApplicationRecord
    has_many: user_layouts
    has_many: layouts, through: user_layouts
end
