# Arduino Project

An interactive art project (in progress) where users will interact with sensors on a microcontroller to manipulate an image (HTML5 canvas) on a projector.

At the start, the user will see a static canvas image such as a tree and mountains. By changing the physical environment around the sensors, they can change the image. Blocking the light will make the sky get darker. Blowing on it will make the leaves rustle. In addition to stimulation, certain changes to the image will only occur after a period of *inactivity*, such as fireflies coming out after a prolonged period of dusk.

The artistic goal is to explore the idea of manipulating a technological environment by manipulating the physical environment, while balancing stimulation and restraint, and patience and control.

### Technologies

* Arduino UNO microcontroller
* C++
* Firmata
* Ruby on Rails
* JavaScript
* AJAX
* HTML5 canvas

### To launch app

Locally: fork and clone app. From terminal, in app's directory, run:

    bundle install
    rails s

In web browser, visit:

    http://localhost:3000/

__NOTE:__ The app relies on input from the Arduino sensors.

This project has not been deployed on the internet.