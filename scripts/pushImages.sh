#!/bin/bash
REPOSITORY_PREFIX=j4ro123
docker push ${REPOSITORY_PREFIX}/spring-petclinic-api-gateway:latest
docker push ${REPOSITORY_PREFIX}/spring-petclinic-visits-service:latest
docker push ${REPOSITORY_PREFIX}/spring-petclinic-vets-service:latest
docker push ${REPOSITORY_PREFIX}/spring-petclinic-customers-service:latest

