title: "Interactive Devices: Building the first complete prototype"
tags:
  - arduino
  - bristol
  - first
  - interactive devices
  - processing
  - prototype
  - puredata
  - synthesiser
  - university
  - water
id: 624
categories:
  - Interactive Devices
date: 2013-11-25 16:16:25
---

It's been a while since my last update in this project blog, but a lot has happened over that time. In the last entry, I discussed the development of the very early stages of the Waves To Waves prototype - which consisted of a singular water sensor firing information to Pure Data, which then sent raw data to FL Studio.

Since then, I have been steadily improving and upscaling the design - providing a framework for six asynchronous water sensors. The more straight forward side to the development was in the hardware area. As can be seen below, the main vessel for the instrument is a shallow plastic tank, with water sensors spaced equidistantly across the side walls in a 3-3 configuration. Beneath is another plastic container with holed walls, which houses the Arduino and most of the electronics behind the instrument.

[caption id="attachment_625" align="aligncenter" width="480"][![The rough exterior of the initial prototype](http://jh47.com/wp-content/uploads/2013/11/2013-11-24-14.38.07-1024x757.jpg)](http://jh47.com/wp-content/uploads/2013/11/2013-11-24-14.38.07.jpg) The rough exterior of the initial prototype[/caption]

The more difficult and time consuming element of the design was the software side. In the last post, I mentioned that I had selected PD (Pure Data) as the framework for handling the communication between the Arduino and FL Studio, and also handling the processing of the raw analog readings outputted by the sensors. While PD interfaced between the two extremes of the pipeline beautifully, and was quick to set up, its almost complete lack of documentation coupled with its steep learning curve made further development a difficult task.

An obvious advantage of using the Pure Data framework is its visual, drag-and-drop nature. No code is required, you just place components on the screen and link them up like you would a real sound system. As a musician myself, this made sense to me, but the issue behind PD's visual nature is that you are limited to its conventions. You can't just write some code to do exactly what you want, you have to figure out a way of doing it by PD's rules. Below is a screenshot of part of what I've made in PD to power the synthesiser. Visual, but complicated.

[caption id="attachment_626" align="aligncenter" width="480"][![Part of the Pure Data configuration that powers the synthesiser](http://jh47.com/wp-content/uploads/2013/11/pdmess-1024x577.png)](http://jh47.com/wp-content/uploads/2013/11/pdmess.png) Part of the Pure Data configuration that powers the synthesiser[/caption]

Nonetheless, by this point (25th November), I've managed to hook up all six sensors successfully, and introduce these features into the processing side of things inside PD:

*   Scaling of inputs to the MIDI range (0-127)
*   Thresholds of firing instances to omit the resting reading of the sensors (this differs from sensor to sensor due to inconsistencies in their construction, annoyingly)
*   Variable metronomic fire rates, depending on signal strength
*   Synthesiser tuned to a chord, defaulting at C Major
*   Variable pitch-shifting of synthesiser "chord"
*   Variable chord changes, shifting through a chord progression depending on the sum of all inputs
*   Octave doubling in the cases of high input, for a thicker texture
*   Centralised stopping/starting of the synthesiser

Furthermore, I have also written the functionality inside PD for a servo motor, controlled via a triangle wave with user-defined parameters. The purpose of this motor was to act as an automated actuator for generating the waves, but the group is undecided at this time as to whether or not to include it in the final build.

At this time, the synthesiser works - it produces ambient soundscapes, using the movement of the water inside the tank as the controlling factor. Sloshing the water around has a noticeable effect on the sound, albeit the effect is relatively minor at the moment. Software enhancements will address this issue.

What the device could benefit from now is a more precise mathematical grounding for the signal processing (utilising James' mathematical background) and more components from Ben that act as actuators to disturb the water.

Nonetheless, things are progressing well!