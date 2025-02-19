## How to run Nightwatch uiautomation test scripts for https://knix.com/

## Pre-requists Installation steps

1. Install Nods js engine - https://nodejs.org/en/download/
2. Setup the environment path for node.js -> SET PATH=C:\Program Files\Nodejs;%PATH%
3. Install JDK version 21.0.2 and setup the environment path -https://www.oracle.com/java/technologies/javase/jdk13-archive-downloads.html
4. Setup the environment path - https://www.codejava.net/java-core/how-to-set-java-home-environment-variable-on-windows-10
5. Install nightwatch - https://nightwatchjs.org/gettingstarted/installation/
6. Install git - https://git-scm.com/
7. install visual studio - https://code.visualstudio.com/download
8. run javac --version to confirm jdk is installed.
9. clone the knix repo - https://github.com/s-kugan/Knixs
10. run npm install in the command line

## command to run the test

npx nightwatch --config nightwatch.conf.js --tag knixproductpage --env edgeEnv --reporter=html
