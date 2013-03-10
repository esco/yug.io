yug.io 
======
Duel online on your desktop, mobile phone, or tablet

Workspace
---
Make a case-sensitive partition for these files

Set up a NODE_DEVELOPER variable in your path or define it when you start the app

ex: <code>NODE_DEVELOPER=Menzoic nodemon app.js</code>

Alternatively you can define NODE_DEVELOPER in your path and use the 'start' shell script in the bin/ folder. 


Libraries
---
The following libraries are dependencies listed in package.json

* express
* jade
* node-config
* mongoose
* underscore

To install these dependencies, run

<code>
	npm install -d
</code>

Scripts
--
make the bin scripts executable

<code>
chmod +x bin/*
</code>

Coffeescript
--
<code>
	sh bin/coffee
</code>

Card Images
--
For local testing, download the [images](http://yug.io/card_imgs.tar.gz) (38.3MB) extract the "card_imgs" folder into the public folder
