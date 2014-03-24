class WelcomeController < ApplicationController

  before_filter :authenticate_user!

  def index
    @tweets = Tweet.all
    #@user_tweets = Tweet.find(:all, :conditions => {:user_id => session[:user_id]})
    @user_tweets = current_user.tweets
  end

  def contact
  end

  def profile
  	@tweets = Tweet.all
  	@user_tweets = current_user.tweets
  	# @tweet_comments = tweet.comment
  	@recent_tweets = Tweet.where(user_id: current_user.id)
  	@last10 = Tweet.last(10)
  end
end
