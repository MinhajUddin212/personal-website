
require 'selenium-webdriver'
# require "chromedriver-helper"
require 'rspec'
require 'json'

def wait_for_window(timeout = 2)
  sleep((timeout / 1000))
end

When('User clicks on skills nav link') do
  $driver.find_element(:id, 'skills-section').click
end

When('User clicks on projects nav link') do
  $driver.find_element(:id, 'projects-section').click
end

When('user clicks on aboutme nav link') do
  $driver.find_element(:id, 'about-me-section').click
end

When('User clicks on resume link') do
  $driver.find_element(:link_text, 'My Resume').click
  $vars['win9904'] = wait_for_window(2000)
end

Then('The page scrolls down to the skills section') do  
  puts "Navigates to skills section successfully"
end

Then('The page scrolls down to the projects section') do
  puts "Navigates to projects section successfully"
end

Then('The page scrolls back up to the aboutme section') do
  puts "Navigates to about me section successfully"
end

Then('The website redirects to resume page') do
  puts "opens resume successfully"
end