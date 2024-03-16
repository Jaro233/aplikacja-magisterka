# Start with a base image containing Java runtime
FROM eclipse-temurin:17 as builder

# The application's jar file
ARG JAR_FILE=target/*.jar

# Add the application's jar to the container
ADD ${JAR_FILE} app.jar

# Run the jar file 
ENTRYPOINT ["java", "org.springframework.boot.loader.launch.JarLauncher"]

# Expose the port the app runs on
EXPOSE 8888