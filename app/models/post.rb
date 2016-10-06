class Post < ActiveRecord::Base
	before_save :default_upvotes, :prepend_http
	has_many :comments

	def as_json(options ={})
		super(options.merge(include: :comments))
	end

	def default_upvotes
		self.upvotes ||= 0
	end

	def prepend_http
		self.link.include?("http://") ? self.link : self.link.prepend("http://")
	end
end
