class User < ApplicationRecord
    has_many: layouts

    # has_secure_password
    #
    # validates :username, uniqueness: true
    # validation?
end
