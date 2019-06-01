ps aux | grep -ie gs-rest-service-0.1.0.jar | grep -v grep | awk '{print $2}' | xargs kill -9
ps aux | grep -ie org.h2.tools | grep -v grep | awk '{print $2}' | xargs kill -9
