module.exports =
	
	Default:
		host: process.env.IP
		port: process.env.PORT
		dbUri: 'mongodb://linus.mongohq.com:10013/yugio'
		dbOptions:
			user:'yugio'
			pass: 'h0tcds'
	
	Production:
		port: 3000
		dbHost: '127.0.0.1'
		dbPort: 27017

	Development:
		host: '127.0.0.1'
		port: 3000
		dbHost: '127.0.0.1'
		dbPort: 27017
		dbName: 'yugio'

	menzoic:
		dbName: 'yugioh'

	#Faizan: