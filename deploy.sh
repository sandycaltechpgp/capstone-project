
cd /var/lib/jenkins/workspace/CapstoneProject/capstone-project

sudo docker build -t myimage:latest -< DockerfileJenkins

sudo docker run -p80:80 -p8087:8087 myimage:latest
