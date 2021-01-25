# Description

This is a learning project. There are exmaples of microservices running inside docker inside kubernetes cluster locally.
Services:

- posts
- comments
- event-bus
- query
- moderation
- client

# Install

Dependencies:

- kubernetes
- minikube
- docker
- skaffold

This is an example project with simple microservices, which running inside a local kubernetes cluster.

Minkube is a cluster for kubernetes
Skaffold automates source code building in to new containers

All can be run without skaffold u need write script or write commands manualy from terminal.

# Start

$ skaffold dev

or

// You should build every docker image and push to docker Hub
$ cd ./client & ./posts & ./event-bus & ./comments & ./query & ./moderation
$ docker build <dockerHubName/imageName> (name/client)
$ docker push <dockerHubName/imageName> (name/client)

// You should apply all configurations in /infra/k8s
$ cd ./infra/k8s
$ kubectl apply -f <name_of_yaml_config_file>
