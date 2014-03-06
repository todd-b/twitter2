class Tweet < ActiveRecord::Base
	belongs_to :user
	has_many :comments
	validates :tweet, :length => { :maximum => 350, :too_long => "350 characters is the maximum allowed tweet" }
end
