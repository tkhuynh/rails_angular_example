class Comment < ActiveRecord::Base
	before_save :default_upvotes
	belongs_to :user
  belongs_to :post

  def default_upvotes
		self.upvotes ||= 0
	end

	def as_json(options = {})
    super(options.merge(include: :user))
  end
end
