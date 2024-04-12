#!/bin/bash

action_kubectl="apply"
action_helm="install"

# Deploy resources in the init-namespace directory
echo "Deploying resources in init-namespace directory..."
kubectl ${action_kubectl} -f init-namespace/

# Deploy secrets in the init-secrets directory
echo "Deploying secrets in init-secrets directory..."
kubectl ${action_kubectl}  -f init-secrets/

# Deploy ConfigMaps and roles in the init-confimap-and-roles directory
echo "Deploying ConfigMaps and roles in init-confimap-and-roles directory..."
kubectl ${action_kubectl}  -f init-configmap-and-role/

# Deploy db
echo "Deploying db..."
helm install mysql-prod helm/db -n prod-db
helm install mysql-stage helm/db -n stage-db

# Deploy cert-manager
echo "Deploying cert-manager..."
helm install cert-manager jetstack/cert-manager --namespace cert-manager --set installCRDs=true

# Deploy nginx-ingress controller
echo "Deploying nginx-ingress controller..."
helm install ingress-nginx ingress-nginx/ingress-nginx --set controller.replicaCount=2  --namespace ingress-nginx

# Deploy microservices
# echo "Deploying app..."
helm ${action_helm} api-gateway helm/app/api-gateway 
helm ${action_helm} customers-service helm/app/customers-service 
helm ${action_helm} vets-service helm/app/vets-service 
helm ${action_helm} visits-service helm/app/visits-service 

# Deploy ingress and cluster resources in the init-ingress-and-cluster directory
echo "Deploying ingress and clusterissuer resources in init-ingress-and-clusterissuer directory..."
kubectl ${action_kubectl}  -f init-ingress-and-clusterissuer/

# # Deploy monitoring
# helm ${action_helm} prometheus prometheus-community/prometheus -f helm/monitoring/prometheus/values.yaml
# helm ${action_helm} grafana grafana/grafana -f helm/monitoring/grafana/values.yaml

# # Deploy logging
# helm ${action_helm} elasticsearch bitnami/elasticsearch -f helm/logging/elasticsearch/values.yaml
# helm ${action_helm} fluentbit helm/logging/fluentbit
# helm ${action_helm} kibana bitnami/kibana -f helm/logging/kibana/values.yaml -n logging

echo "Deployment completed."