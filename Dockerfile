#
# Build stage
#

FROM ubuntu:16.04

RUN apt-get update && apt-get install -y \
  build-essential \
  git \
  openjdk-8-jdk \
  maven \
  nginx \
  curl

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - \
  && apt-get install -y nodejs 




COPY backend-app/target/*.jar /usr/local/lib/demo.jar

COPY backend-app/ /home/be

WORKDIR /home/be/
RUN mvn clean install -DskipTests

COPY front-end-app /home/fe/


WORKDIR /home/fe
RUN npm install
RUN npm run ng build  --verbose --progress=true

RUN cp -R /home/fe/dist/shopping-app/*  /usr/share/nginx/html/

RUN rm -v /etc/nginx/nginx.conf

# Copy a configuration file from the current directory
ADD nginx.conf /etc/nginx/


# Append "daemon off;" to the beginning of the configuration
#RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# Set the default command to execute
# when creating a new container
#RUN service nginx start
#CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80 8087

WORKDIR /usr/local/lib
#ENTRYPOINT ["java", "-jar","-Dspring.profiles.active=devh2","/usr/local/lib/demo.jar"]
ENTRYPOINT sh -c 'service nginx start && java -jar -Dspring.profiles.active=devh2 /usr/local/lib/demo.jar'
