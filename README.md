# Interactive animation

An interactive art project where users interact with sensors on a microcontroller to manipulate an animation (HTML5 canvas) on a projector.

At the start, the user sees a static canvas image such as a tree and mountains. By changing the physical environment around the sensors, they can change the image. Blocking the light will make the sky get darker. Blowing on it will make the leaves rustle. In addition to stimulation, certain changes to the image will only occur after a period of *inactivity*, such as fireflies coming out after a prolonged period of dusk.

The artistic goal is to explore the idea of manipulating a technological environment by manipulating the physical environment, while balancing stimulation and restraint, and patience and control.

### Technologies

- Arduino UNO microcontroller
- Firmata
- Ruby on Rails
- JavaScript
- AJAX
- HTML5 canvas

### Key files

- app > assets > javascripts > [ajax_call.js](../../blob/master/app/assets/javascripts/ajax_call.js)
- app > assets > javascripts > [updates.js](../../blob/master/app/assets/javascripts/updates.js)
- app > controllers > [site_controller.rb](../../blob/master/app/controllers/site_controller.rb)
- app > views > site > [display.html.erb](../../blob/master/app/views/site/display.html.erb)

### To launch app

Locally: fork and clone app. From terminal, in app's directory, run:

    bundle install
    rails s

In web browser, visit:

    http://localhost:3000/

__NOTE:__ The app relies on input from the Arduino sensors.