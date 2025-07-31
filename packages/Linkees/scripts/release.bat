@echo off
setlocal enabledelayedexpansion

set package_name=linkees

call npm run clean
call npm run build

for /f "tokens=*" %%i in ('node -p "require('./package.json').version"') do set current_version=%%i

echo Next version for %package_name% (current is %current_version%)?
set /p next_version=

echo %next_version% | findstr /r "^[0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*" >nul
if errorlevel 1 (
  echo %next_version% | findstr /r "^[0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*-" >nul
  if errorlevel 1 (
    echo Version must be a valid semver string, e.g. 1.0.2 or 2.3.0-beta.1
    exit /b 1
  )
)

if "%current_version%"=="%next_version%" (
  echo Republishing same version. Deleting the older version
  echo Successfully deleted older version
)

call npm version "%next_version%"

REM Copy README.md to the package root for publishing
copy ..\..\README.md .\

git add .
git commit -m "upgrades %package_name% to %next_version%"

echo Publishing %package_name% %next_version%

REM Publish from the package root (will only include files specified in "files" field)
call npm publish
echo %package_name% %next_version% is successfully published. 