# Gallery
This is a [Jekyll](https://jekyllrb.com/) website built to showcase the fine art done by the members of the California Art League.

You can view it on GitHub Pages at: [http://californiaartleague.github.io/gallery](http://californiaartleague.github.io/gallery)

## Requirements

 - [Ruby v1.9.3 or above](https://www.ruby-lang.org/en/downloads/)
 - [RubyGems](https://rubygems.org/pages/download)
 - Linux, Unix, or Mac OS X

## Usage

Run the following commands in your console:
```
$  git clone git@github.com:californiaartleague/gallery.git
$  cd gallery
$  bundle install
```

For development, run:
```
$  jekyll liveserve --config _config.yml,_config-dev.yml
```

then navigate to `http://localhost:4000/` in your browser.

To create a build for production, run:
```
$  JEKYLL_ENV=production jekyll build
```
Then upload the contents of the `_site` directory to your webhost.

The command to do this on GitHub pages is:
```
$  git subtree push --prefix _site origin gh-pages
```