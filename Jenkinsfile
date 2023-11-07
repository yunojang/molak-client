node {
  def GIT_URL = "https://github.com/molak-lab/molak_client.git"
  def vars = checkout scm
  def branch = env.BRANCH_NAME

  def IMAGE_NAME = "molak-web-image"
  def CONTAINER_NAME = "molak-web-server"

  dir("${env.WORKSPACE}") {

    stage ('Image Build') {
        sh "docker build -t ${IMAGE_NAME}:latest ."
    }

    stage ('Delete Container & Image') {
      sh "docker rm -f ${CONTAINER_NAME}"
      sh "docker rmi -f ${IMAGE_NAME}"
    }

    stage ('Deploy') {
      sh "docker run -d --name ${CONTAINER_NAME} -p 80:80 --network molak-network ${IMAGE_NAME}"
    }

  }
}