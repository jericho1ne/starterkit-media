rsync -v -i -p dist/.htaccess mpeteu@uzabl.com@delta.hostineer.com:/var/www/html/starterkitmedia/
rsync -v -i -p dist/index.html mpeteu@uzabl.com@delta.hostineer.com:/var/www/html/starterkitmedia/

rsync -v -i -p -r --exclude="*.liquid" --exclude="*.psd" --exclude="*.xml" --exclude="*.mp4" --exclude="*.webm" \
  dist/ mpeteu@uzabl.com@delta.hostineer.com:/var/www/html/starterkitmedia
