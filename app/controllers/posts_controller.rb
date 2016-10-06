class PostsController < ApplicationController
	before_action :get_post, only: [:show, :upvote]

	def index
		respond_with Post.all
	end

	def show
		respond_with @post
	end

	def create
		respond_with Post.create(post_params)
	end

	def upvote
		@post.increment!(:upvotes)
		respond_with @post
	end

	private

	def get_post
		@post =  Post.find(params[:id])
	end

	def post_params
		params.require(:post).permit(:link, :title)
	end

end