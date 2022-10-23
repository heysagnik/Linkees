<img src="https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png" height='50'/>

### Running locally with Docker

1. Build the image
    ```
    docker build -t imagename . -f Local.Dockerfile
    ```
2. Finally, run your docker image
   ```
   docker run -p 3000:3000 --name appname -d imagename
   ```
### Deploying with Docker

> Ensure that your Dockerfile is the Production Dockerfile, check line 1 of both Dockerfiles to confirm.

1. Login to your registry
    ```
    docker login registry.example.com
    ```
2. Add image to your registry
     ```
    docker build -t registry.example.com/appname 
     ```
     ```
    docker push -t registry.example.com/appname
     ```
3. Pull image from your registry
   ```
   docker pull registry.example.com/appname
   ```

4. Finally, run your docker image
   ```
    docker run --network host --name appname -d registry.example.com/appname
   ```

For Any Help Reach out to [Hakim Zulkhibri](https://twitter.com/hakimzuldev) , the man behind dockerizing this project 
