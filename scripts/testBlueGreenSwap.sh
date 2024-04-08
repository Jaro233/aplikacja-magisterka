#!/bin/bash
INTERNAL_MICROSERVICE="true"
APP_NAME_SHORT="customers-service"
newSlot="blue"
namespace=spring-petclinic

# This could be simplified since it's the same in every branch
deploymentOption="productionSlot=$newSlot"
echo "$deploymentOption"

if [ "$newSlot" == "blue" ]; then
  oldSlot=green
else
  oldSlot=blue
fi

if [ "$INTERNAL_MICROSERVICE" == "true" ]; then
  # Deploy the new version (either blue or green) and wait for it to become ready
  helm upgrade "${APP_NAME_SHORT}" ./kubernetes/helm/app/"${APP_NAME_SHORT}" --set database.uri_env_${newSlot}=mysql-prod.prod-db --reuse-values
  if ! kubectl rollout status deployment/${APP_NAME_SHORT}-${newSlot} -n ${namespace} --timeout=60s; then
    echo "Deployment failed. Starting rollback..."
    helm rollback "${APP_NAME_SHORT}"  # This rolls back to the previous revision
    exit 1
  fi

  # Swap selectors to direct production traffic to the new version (newSlot) and wait for it to become ready
  helm upgrade "${APP_NAME_SHORT}" ./kubernetes/helm/app/"${APP_NAME_SHORT}" --set "$deploymentOption" --reuse-values
  if ! kubectl rollout status deployment/${APP_NAME_SHORT}-${newSlot} -n ${namespace} --timeout=60s; then
    echo "Deployment failed. Starting rollback..."
    helm rollback "${APP_NAME_SHORT}"  # This rolls back to the previous revision
    exit 1
  fi

  # Update the old version (oldSlot) to the stage configuration and wait for it to become ready
  helm upgrade "${APP_NAME_SHORT}" ./kubernetes/helm/app/"${APP_NAME_SHORT}" --set database.uri_env_${oldSlot}=mysql-stage.stage-db --reuse-values
  if ! kubectl rollout status deployment/${APP_NAME_SHORT}-${oldSlot} -n ${namespace} --timeout=60s; then
    echo "Deployment failed. Starting rollback..."
    helm rollback "${APP_NAME_SHORT}"  # This rolls back to the previous revision
    exit 1
  fi

else
  # Deploy the new version (either blue or green) and wait for it to become ready
  helm upgrade "${APP_NAME_SHORT}" ./kubernetes/helm/app/"${APP_NAME_SHORT}" --set microservice.profile_env_${newSlot}=kubernetes --reuse-values
  if ! kubectl rollout status deployment/${APP_NAME_SHORT}-${newSlot} -n ${namespace} --timeout=60s; then
    echo "Deployment failed. Starting rollback..."
    helm rollback "${APP_NAME_SHORT}"  # This rolls back to the previous revision
    exit 1
  fi

  # Swap selectors to direct production traffic to the new version (newSlot) and wait for it to become ready
  helm upgrade "${APP_NAME_SHORT}" ./kubernetes/helm/app/"${APP_NAME_SHORT}" --set "$deploymentOption" --reuse-values
  if ! kubectl rollout status deployment/${APP_NAME_SHORT}-${newSlot} -n ${namespace} --timeout=60s; then
    echo "Deployment failed. Starting rollback..."
    helm rollback "${APP_NAME_SHORT}"  # This rolls back to the previous revision
    exit 1
  fi

  # Update the old version (oldSlot) to the stage configuration and wait for it to become ready
  helm upgrade "${APP_NAME_SHORT}" ./kubernetes/helm/app/"${APP_NAME_SHORT}" --set microservice.profile_env_${oldSlot}=kubernetes-stage --reuse-values
  if ! kubectl rollout status deployment/${APP_NAME_SHORT}-${oldSlot} -n ${namespace} --timeout=60s; then
    echo "Deployment failed. Starting rollback..."
    helm rollback "${APP_NAME_SHORT}"  # This rolls back to the previous revision
    exit 1
  fi
fi