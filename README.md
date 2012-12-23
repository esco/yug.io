yug.io 
======

Workspace
---
Make a case-sensitive partition for these files

Libraries
---
Link these libraries to your project directory but don't add them to the repo

* express
* jade

To link them, first install globally on your machine, and then link them.

Ex:

Install globally:
<code>
	npm install -g express
</code>

Then link: 

<code>
	#run this in your project directory
	npm link express
</code>

npm will link the library into the node_modules folder.

Coffeescript
--
<code>
	coffee --watch --compile --output public/javascripts coffee/public/javascripts
</code>
