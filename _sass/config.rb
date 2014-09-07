# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"

# Set this to the root of your project when deployed:

# Production Assets URL
http_images_path = "http://www.carloseriksson.com/img"

# Compass will automatically add cache busters to your images based on image timestamps. 
# This will keep browser caches from displaying the wrong image if you change the image but not the url. 
# If you don’t want this behavior, it's easy to configure or disable:

# UNCOMMENT THE NEXT THREE LINES
#asset_cache_buster do |http_path, real_path|
#  nil
#end

# Project Assets Location
sass_dir = "./"
css_dir = "../assets/themes/carloseriksson/css"
images_dir = "../assets/themes/carloseriksson/img"
javascripts_dir = "../js"
relative_assets = true


# Development
#output_style = :expanded
#environment = :development

# Production
output_style = :compressed
environment = :production


# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass