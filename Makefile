local-development:
	npm i;
	npm run serve;

deploy:
	npm run deploy;

docker-build:
	docker-compose build;

docker-up:
	docker-compose up;

#to run commands: open terminal up at the project root and enter "make 'command-name'" where 'command name'
#is the name of the command(e.g. local-development)