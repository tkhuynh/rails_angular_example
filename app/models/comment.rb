class Comment < ActiveRecord::Base
	before_save :default_upvotes
  belongs_to :post

  def default_upvotes
		sefl.upvotes ||= 0
	end
end
