init: build up

build:
	 docker-compose build

up:
	docker-compose up -d

stop:
	 docker-compose stop

down:
	 docker-compose down

restart: down up

fresh:
	docker-compose exec api npm run prisma:fresh

docker-build:
	 docker-compose build
