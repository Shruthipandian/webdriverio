Webdriver V7 with Docker setup.

<!-- To run the code in docker image -->
<!-- Make sure you have Docker Desktop/ Docker CLI installed on your machine. -->

docker build -t ${Image_Name} -f Dockerfile .
docker run -it ${Image_Name}


<!-- To run the code in Local -->

npm install
npm run test