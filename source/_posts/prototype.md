title: "Interactive Devices W4: Developing a prototype"
tags:
  - arduino
  - firmware
  - interactive devices
  - pd
  - prototype
  - pure data
  - synthesiser
  - water
id: 603
categories:
  - Interactive Devices
date: 2013-11-12 23:55:43
---

Last week, we altered direction from our original course of action - heading towards a more collaborative and smaller-scale end goal instead of a large installation designed for a small number of participants at a time. Looking even further back to the start of the project, it was agreed that I would take the lead on the musical interfacing side of the project, due to my experience in the area on previous projects. This primarily involves the generation of music from the data extracted from the movement of the water.

<!-- more -->

Therefore, my task this week was to devise a way to get the water level sensors and the software synthesiser (FL Studio) to talk to each other. My pipeline was as follows:

**Water sensor &gt; Arduino &gt; (MIDI Interface) &gt; DAW (FL Studio)**

The sensor, Arduino and DAW were already a given, but the MIDI interface was still an unknown piece of the puzzle. I initially started by downloading and configuring openFrameworks, suggested by James in an earlier session, but eventually found that it was no longer suitable for purpose, as it would have been more useful when we were using the Kinect.

After researching and trying out a number of methods including custom Arduino firmware that turned it into a MIDI controller in the eyes of a computer, and a bridge that piped raw results from the Arduino program into a modified [Kugelschwung](http://www.eecs.umich.edu/nime2012/Proceedings/papers/131_Final_Manuscript.pdf) synthesiser - I eventually settled on a universally preferable option: Pure Data.

Pure Data is the open-source cousin of Max/MSP, a highly popular visual programming language and interface for piecing together audio interfaces. Within a relatively short about of time, I was able to get the Arduino talking to FL Studio, using Firmata as the bridge between the Arduino and Pure Data, and Pure Data as a means to generate MIDI signals from the raw values the Arduino gave out. Then, using the free internal loopback tool LoopBe1, I fed the MIDI signals from Pure Data into FL Studio - where the signals could be processed into actual sound.

Next week, I will be enhancing the quality of the sound, as well as expanding the breadth of the connection between the sensors and the synthesiser - allowing scope for the addition of additional sensors.

Below is a video of my first basic synthesiser prototype in action. It may sound awful at the moment, but bear in mind that the prototype is in a very early stage of development!

<center><iframe src="//www.youtube.com/embed/NbIr9tQMA1E" height="252" width="448" frameborder="0"></iframe></center>