require 'rubygems'
require 'selenium-webdriver'
require "webdrivers"
Before do
  $driver = Selenium::WebDriver.for :chrome
  $driver.get "https://codingwithminhaj.com"
  $vars = {}
end
After do
  $driver.quit
end
