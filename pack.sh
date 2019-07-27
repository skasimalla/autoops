version=0.1

mkdir -p release/autoops
rm -rf release/autoops/*

rsync -r --exclude="release" * release/autoops

rm -rf release/autoops/logs/*
rm -rf release/autoops/serve/*
rm -rf release/autoops/target
rm -rf release/autoops/.classpath
rm -rf release/autoops/.project
rm -rf release/autoops/.settings
rm -rf release/autoops/release
rm -rf release/autoops/pom.xml
rm -rf release/autoops/pack.bat
rm -rf release/autoops/build-jar.bat
rm -rf release/autoops/release-lib
rm -rf release/autoops/conf/*.sql

cp -r target/gs-rest-service-0.1.0.jar release/autoops/
cp -r release-lib/* release/autoops/

cd release

jar -cfM autoops$version.zip autoops/*
cksum autoops$version.zip > autoops$version.cksum

#scp release/autoops%version%.zip release/autoops%version%.cksum solutions@atomicitysystems.eastus.cloudapp.azure.com:/home/solutions/http-server
