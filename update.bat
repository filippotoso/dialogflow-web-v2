@ECHO OFF

ECHO Checking out develop
git checkout develop

ECHO Adding all
git add .
git status

SET /P MESSAGE=Please enter the commit message: 
IF "%MESSAGE%"=="" GOTO Error
git commit -m "%MESSAGE%"

ECHO Pushing to origin
git push origin master --tags

ECHO Done!
GOTO End
:Error
ECHO You did not enter the message!
:End
