start java -cp h2-1.4.197.jar org.h2.tools.Server -tcp -web -properties "./db" > logs/h2.log 2>&1
java -jar gs-rest-service-0.1.0.jar  > logs/oat3.log 2>&1
