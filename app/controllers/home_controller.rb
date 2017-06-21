class HomeController < ApplicationController
	def draw
		f = Nokogiri::HTML(open('app/views/home/index.html.erb'))
		cont = f.at_css('#canv')
		File.write("output/k.svg", cont)

		redirect_to :action => 'index' 
	end
end
