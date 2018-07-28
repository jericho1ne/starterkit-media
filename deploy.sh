rsync -v -i dist/.htaccess mpeteu#uzabl.com@delta.hostineer.com:/var/www/html/starterkitmedia
# rsync -v -i dist/index.html mpeteu#uzabl.com@delta.hostineer.com:/var/www/html/starterkitmedia/
rsync -v -i -r --exclude="*.liquid" --exclude="*.psd" --exclude="*.xml" --exclude="*.mp4" \
  dist/ mpeteu#uzabl.com@delta.hostineer.com:/var/www/html/starterkitmedia
