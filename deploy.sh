

node {


    stage('2') {
	sh "sudo docker build -t myimage:latest -< /var/lib/jenkins/workspace/CapstoneProject@script/DockerfileJenkins"
    }

    stage('3') {
	sh "sudo docker run -p80:80 -p8087:8087 myimage:latest"
    }

}


