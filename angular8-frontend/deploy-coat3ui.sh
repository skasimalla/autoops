#!/bin/bash

clear
RTYPE=$1
echo "Building project address management for $RTYPE release."
#First check if the dist folder exists.  If not jump out with a message
#Create Folder names
BACKUPFOLDER="//servername/root/FILE1/Software/coat3ui_builds/last_coat3ui_"$RTYPE"_deployment"
PROJECTFOLDER="/C/GitRepoCoat/coat3ui"
DISTFOLDER="//servername/d$/Jenkins/workspace/coat3ui-$RTYPE/dist"
DESTINATIONFOLDER=""

if [ $RTYPE == "dev" ]
then
    DESTINATIONFOLDER="//servername/d$/inetpub/coat3uidev"
fi

if [ $RTYPE == "uat" ]
then
    DESTINATIONFOLDER="//servername/d$/inetpub/coat3uiuat"
fi


if [ $RTYPE == "prod" ]
then
    DESTINATIONFOLDER="//servername/d$/inetpub/coat3uiprod"
fi

if [ ! -d "$DISTFOLDER" ]; then
    echo "Dist folder is missing. Build must have failed."
    exit -1
fi

echo "DIST folder is: "$DISTFOLDER
echo "Destination folder is: "$DESTINATIONFOLDER
echo "Removing files in backup folder $BACKUPFOLDER"
#See if backup folder is there, if not, create it
if [ ! -d $BACKUPFOLDER ]; then
  echo "Creating backup folder..."$BACKUPFOLDER
  mkdir -p $BACKUPFOLDER
fi

cd $BACKUPFOLDER
if [ $PWD == $BACKUPFOLDER ]
then
    rm -r *
    echo "Files removed from backup folder."
    #now change to the destination folder in order to backup and then remove the files
    cd $DESTINATIONFOLDER
    if [ $PWD == $DESTINATIONFOLDER ]
    then
        #now copy the last deployment files to the backup folder
        echo "Backing up the last deployment files"
        cp -r * $BACKUPFOLDER

        #now delete the files in the destination folder
        echo "Deleting old destination files..."
        rm -r *
        echo "Destination Files Deleted."
        #now change back to the dist directory
        cd $DISTFOLDER
        
        if [ $PWD == $DISTFOLDER ]
        then
            echo "Copying dist folder to destination folder..."
            cp -r * $DESTINATIONFOLDER
            echo "Copied files from dist to Destination folder:"$DESTINATIONFOLDER
            
            #web.config file is not needed for this script           
            #echo "Copying the webconfig file..."
            #cp -f C:/GitRepos/consent-client/src/web.config $DESTINATIONFOLDER
            
            echo "Done copying the dist files to the destination folder."
            #navigate back to the root project folder                
            cd $PROJECTFOLDER
            if [ $PWD == $PROJECTFOLDER ]
            then                    
                echo "Finished deploying files. "
            else
                echo "Could not navigate back to the project folder."
            fi
        else
            echo "Could not navigate back to the DIST folder: "$DISTFOLDER
        fi
    else
        echo "Could not navigate to the destination folder: "$DESTINATIONFOLDER
    fi
else
    echo "Could not navigate to the archive folder: $BACKUPFOLDER"
fi

read -p "Done. Press any key to end the sript..."