# Application Launch Documentation

This documentation provides steps for successfully launching the application. Please follow the instructions carefully to avoid errors.

## Requirements

Before getting started, make sure you have the following programs installed:

- Make
  - On Mac
    - ```
        brew install make
        ```
  - On Ubuntu
      - ```
        sudo apt install make
        ```
- Docker
  - https://docs.docker.com/engine/install/

## Installation

1. Clone the repository from GitHub:

    ```
    git clone https://github.com/dima-chebotar/my-vocabulary
    ```

2. Navigate to the application directory:

    ```
    cd my-vocabulary
    ```

## Launch

You can launch the application. Execute the following command:

- ```
    cp api/.env.example api/.env
  ```
- ```
    make init
  ```
- ```
    make fresh
  ```

This will start the application in development mode. Open your browser and go to [http://localhost:4200/users/1](http://localhost:4200/users/1) to view the application.

## Usage

The application is available for you at [http://localhost:4200/users/1](http://localhost:4200/users/1). You can interact with it by performing corresponding actions in the browser.

## Shutdown

To stop the application, press `make down` in the terminal where the application is running.

## Support

If you encounter any issues with launching or using the application, please contact our support at dmytro.chebotar@gmail.com.


