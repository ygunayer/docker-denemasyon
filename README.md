# Docker 101
Docker denemasyon

## Setup
Build the images
```
docker-compose build .
```

Run the containers
```
docker-compose up
```

This runs Docker in the foreground so if you'd like to run in the background (like running with `nohup`) simply specify `-d`.

```
docker-compose up -d
```

## Monitoring
We can monitor our local Docker installation using Portainer. We already include it in our `docker-compose.yml` so it'll be online once you `up` the images using docker-compose, but if you wish to install and run it manually see the section below.

### Manual Installation

#### Linux and OSX
```
docker run -d -p 9000:9000 portainer/portainer
```

#### Windows (without a VM, using the official Windows version of Docker)
```
docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer
```
*Note*: Not specifying `-v /var/run/docker.sock:/var/run/docker.sock` might cause Portainer UI to not work

#### Windows (with a VM, using older methods)
```
docker run -d -p 9000:9000 portainer/portainer:windows
```
