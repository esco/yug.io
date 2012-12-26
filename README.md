yug.io 
======

Workspace
---
Make a case-sensitive partition for these files

Set up a NODE_DEVELOPER variable in your path or define it when you start the app

ex: <code>NODE_DEVELOPER=Menzoic node app.js</code>

Libraries
---
Link these libraries to your project directory but don't add them to the repo

* express
* jade
* node-config
* mongoose
* underscore

To link them, first install globally on your machine, and then link them.

Ex:

Install globally:
<code>
	npm install -g express
</code>

Then link: 

run this in your project directory:
<code>
	npm link express
</code>

npm will link the library into the node_modules folder.

Coffeescript
--
<code>
	coffee --watch --compile --output . coffee
</code>
