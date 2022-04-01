FROM mysql:latest
ENV MYSQL_ROOT_PASSWORD 123
ENV MYSQL_DATABASE wordloop_data
ENV MYSQL_USER admin
ENV MYSQL_PASSWORD admin
ADD /db/migrations/V202202181852.sql /docker-entrypoint-initdb.d
EXPOSE 3306