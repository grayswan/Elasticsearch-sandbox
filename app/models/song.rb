class Song < ApplicationRecord

  searchkick text_start: [‘artist’], text_start: [‘name’]
  
end
