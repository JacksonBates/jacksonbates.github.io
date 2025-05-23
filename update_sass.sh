#!/bin/zsh

echo "Updating to modern Sass syntax..."

# Create backup directory
mkdir -p backup_scss

# Backup original files
cp src/stylesheets/*.scss backup_scss/

# Move new files to replace old ones
mv src/stylesheets/resume.scss.new src/stylesheets/resume.scss
mv src/stylesheets/_bootstrap-overrides.scss.new src/stylesheets/_bootstrap-overrides.scss

echo "Compiling with modern Sass syntax..."
sass src/stylesheets/resume.scss public/stylesheets/resume.css

echo "Done!"
