require 'rubygems'
require 'selenium-webdriver'
# require "chromedriver-helper"
Before do
  $driver = Selenium::WebDriver.for :chrome
  $driver.get "https://codingwithminhaj.com"
  $vars = {}
end
After do
  $driver.quit
end
