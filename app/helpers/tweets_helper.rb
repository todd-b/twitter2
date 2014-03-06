module TweetsHelper
	def set_num_comment(tweet_id)
		# need to set a conditional here where the num_comments column is added to if comments are added
		# how do you work with the data here?
		# if a comment is added the num_comments field will add 1
		# else num_comments will have 0
		# sum(:num_comments)
		comments = Comment.where("tweet_id = #{tweet_id}").count

		tweet = Tweet.find(tweet_id)

		tweet.num_comment = comments

		tweet.save

	end
end
