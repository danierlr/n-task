## Description

Proxy for https://exchangerate-api.com.

## Installation and running the app

### Option 1 - local instance:

1. ensure node version is **22.5.1**
2. ensure **pnpm** package manager is installed
3. run ```pnpm i``` to install npm dependencies
4. (optional) copy _.env.example_ as _.env_ and adjust configuration as necessary
5. run ```pnpm run start``` to start the app
6. (optional) perform a request to ```http://localhost:3000/api/v1/status``` to make sure service is working, adjust port if necessary
7. perform an example request to ```http://localhost:3000/api/v1/quote?baseCurrency=EUR&quoteCurrency=USD&baseAmount=200``` or similar


### Option 2 - docker container:

1. ensure docker is installed
2. (optional) copy _.env.example_ as _.env_ and adjust configuration as necessary and change ```port``` in dockerfile if necessary
3. run ```docker build -t n-task .``` to build a docker image
4. run ```docker run -p 3000:3000 --name n-task-instance n-task``` to run docker container

## Test

```bash
# unit tests
$ pnpm run test
```
