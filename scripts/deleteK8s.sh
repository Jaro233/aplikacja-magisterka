#!/bin/bash

action_kubectl="delete"
action_helm="uninstall"

# Uninstall logging
helm ${action_helm} kibana -n logging
helm ${action_helm} fluentbit -n logging
helm ${action_helm} elasticsearch -n logging 

# Uninstall monitoring
helm ${action_helm} grafana -n monitoring
helm ${action_helm} prometheus -n monitoring

# Delete ingress and cluster resources in the init-ingress-and-cluster directory
echo "Deleting ingress and clusterissuer resources in init-ingress-and-clusterissuer directory..."
kubectl ${action_kubectl}  -f init-ingress-and-clusterissuer/

# Undeploy app
helm ${action_helm} visits-service
helm ${action_helm} vets-service 
helm ${action_helm} customers-service
helm ${action_helm} api-gateway 

# Uninstall nginx-ingress controller
helm ${action_helm} ingress-nginx -n ingress-nginx

# Uninstall cert-manager
helm ${action_helm} cert-manager -n cert-manager

# Uninstall db
helm ${action_helm} mysql-prod -n prod-db
helm ${action_helm} mysql-stage -n stage-db

# Delete ConfigMaps and roles in the init-confimap-and-roles directory
echo "Deleting ConfigMaps and roles in init-confimap-and-roles directory..."
kubectl ${action_kubectl}  -f init-configmap-and-role/

# Delete secrets in the init-secrets directory
echo "Deleting secrets in init-secrets directory..."
kubectl ${action_kubectl}  -f init-secrets/

# Delete resources in the init-namespace directory
echo "Deleting resources in init-namespace directory..."
kubectl ${action_kubectl} -f init-namespace/

echo "Deployment rollback completed."
