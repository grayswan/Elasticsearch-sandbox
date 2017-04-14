class Song < ApplicationRecord

  # searchkick
  #
  # def search_data {
  #
  # }

  searchkick text_start: ['artist'], text_start: ['name']

end
