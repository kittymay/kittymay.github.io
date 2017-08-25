# Copy static site
CWD=`pwd`

# Clone Pages repository
cd /tmp
git clone git@github.com:kittymay/kittymay.github.io.git build

# Trigger Jekyll rebuild
cd $CWD
bundle exec jekyll contentful
bundle exec jekyll build

# Push newly built repository
cp -r $CWD/_site/* /tmp/build

cd /tmp/build

git config --global user.email "kittymay@gmail.com"
git config --global user.name "Kitty"

git add .
git commit -m "Automated Rebuild"
git push -f origin master
