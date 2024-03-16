# Start with a base image containing Java runtime
FROM openjdk:17-oracle

# The application's jar file
ARG JAR_FILE=target/*.jar

# Add the application's jar to the container
ADD ${JAR_FILE} app.jar

ENV SPRING_PROFILES_ACTIVE docker,mysql

# Run the jar file 
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]

# Expose the port the app runs on
EXPOSE 8083