ps aux | grep -ie org.h2.tools | grep -v grep | awk '{print $2}' | xargs kill -9