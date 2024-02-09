
@echo off
set "zipUrl=https://github.com/heysagnik/Linkees/archive/refs/heads/old.zip"
set "zipFile=old.zip"
set "extractDir=Linkees-old"

echo Downloading %zipUrl%...
curl -L -o "%zipFile%" "%zipUrl%"

if %ERRORLEVEL% neq 0 (
    echo Failed to download the zip file.
    exit /b 1
)

echo Extracting %zipFile%...
powershell -command "Expand-Archive -Path .\%zipFile% -DestinationPath '.'"
if exist %zipFile% (
    del %zipFile%
)
ren "Linkees-old" "Linkees"
cd Linkees
npm install


echo "Set up is completed"

