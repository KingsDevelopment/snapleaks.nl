#!/bin/bash

# install npm dependencies
npm install

# install gulp workflow dependencies
node_modules/.bin/npm-install-from --path lib/gulp

# install bower dependencies
bower install --allow-root

# build admin
gulp build:d --theme admin
gulp build:d --theme admin-rtl
gulp build:d --theme admin-angular

# build kits
gulp build:d --theme color
gulp build:d --theme essential
gulp build:d --theme layout
gulp build:d --theme navbar
gulp build:d --theme sidebar

# build social
gulp build:d --theme social-1
gulp build:d --theme social-2
gulp build:d --theme social-3
gulp build:d --theme social-1-rtl
gulp build:d --theme social-2-rtl
gulp build:d --theme social-3-rtl

# build social skins
gulp less:skins --theme social-1
gulp less:skins --theme social-2
gulp less:skins --theme social-3

# build music
gulp build:d --theme music
gulp build:d --theme music-rtl

# build learning
gulp build:d --theme learning

# build learning skins
gulp less:skins --theme learning

# build real-estate
gulp build:d --theme real-estate

# build choose
gulp build:choose --theme choose

# build docs
cd lib/docs/
mkdocs build