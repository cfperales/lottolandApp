# LottolandApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

Minimum version of node to run the app: v10.9.0

As the project has been developed in Angular, I have used Typescript instead of ES6.

Steps to run the App:
- To be able to start the App you need to configure a VPN. 
- Access-Control-Allow-Origin is not configured in the Server, so it was necessary added in the header from Client side (using an addon in the browser). CORS introduces a standard mechanism that can be used by all browsers for implementing cross-domain requests.
- Once CORS was configured, Chrome was blocking the request due to CORB, for more info go to: `https://www.chromium.org/Home/chromium-security/corb-for-developers`.
- I recommend test the application with Firefox to avoid CORB issues with Chrome because it needs to be configured on server side.

Angular ensure that it will work for all Webkit-base devices. The configuration is done in the file broserslist file.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `ng test --code-coverage` to check the test coverage. 100% done.
