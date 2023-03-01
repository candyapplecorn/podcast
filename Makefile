local-development:
	npm i;
	npm run serve;

deploy:
	npm run deploy;

docker-build:
	docker-compose build;

docker-up:
	docker-compose up;