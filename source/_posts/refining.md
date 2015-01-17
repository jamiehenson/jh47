title: "Interactive Devices: Refining the synthesiser"
tags:
  - arduino
  - lights
  - pure data
  - refine
  - synthesiser
  - waves to waves
id: 629
categories:
  - Interactive Devices
date: 2013-11-27 23:37:12
---

Two days ago, we got to the stage where we had the first point-to-point prototype of Waves To Waves - a system that took readings from the water, processed them, and fed them into a synthesiser as musical data. Since then we have gone further by improving the interface in all aspects. Below you can see Waves To Waves in a dark room, illuminated by on-board LED lights - it looks quite appealing! Additionally, we have built a wooden frame that houses the sensors and sits snugly on top of the tank. We thought this was more professional (and more waterproof) than using sticky tape.

[caption id="attachment_633" align="aligncenter" width="480"][![Waves To Waves in a dark room, illuminated by the onboard LEDs](http://jh47.com/wp-content/uploads/2013/11/2013-11-27-22.49.46-1024x757.jpg)](http://jh47.com/wp-content/uploads/2013/11/2013-11-27-22.49.46.jpg) Waves To Waves in a dark room, illuminated by the onboard LEDs[/caption]

Aside from the wooden frame, and general tidy-ups, visually Waves To Waves doesn't appear that different to before. The majority of the changes come under the software - with the processing side of the instrument in Pure Data being completely overhauled.

Before, we noticed an issue where it would take a long time for the instrument to stop playing after a wave had been made, because the sensors were still wet and therefore still reporting activity. Also, we found that the instrument was generally unresponsive to touch, and differences in the tolerances of each sensor caused problems when normalising the readings they produced.

We got around all of these problems by switching the source of the readings from the absolute values of the sensors, to the delta values - that is, their rates of change. This way, we have a significantly more responsive instrument that responds quickly to bold movements, and then quickly decays (since sensors drying is a very slow movement compared to a hand wafting through the tank).

Furthermore, changes were made to the layout of the processing module itself. You may recall from the previous post that I was complaining about the complexity of Pure Data, backing up my claim with a screenshot of a program file that looked somewhat like a spider's web. Since then, I have learned more about sub-patches, meaning that I was able to make the program significantly more modular and approachable - which helped when explaining the program to Ben and James.

A new feature is that of musical visualisation, shown in the screenshot below. This isn't a feature developed by us, as in we didn't write the visualiser, but we integrated it within our workings in FL Studio to react accordingly to the music we produce. Intended as a cosmetic enhancement, we feel that live visualisations running parallel to the performance will really help to increase the expressiveness of the performance.

[caption id="attachment_632" align="aligncenter" width="480"][![Screenshot of the wave visualisation](http://jh47.com/wp-content/uploads/2013/11/2013-11-27-22.50.46-1024x757.jpg)](http://jh47.com/wp-content/uploads/2013/11/2013-11-27-22.50.46.jpg) Screenshot of the wave visualisation[/caption]

The next stage is more refinement still. We were keen to get the physical prototype developed early, so that we could spend time reflecting and thinking about where to go next from a creative design point of view. This will require group discussion, but we can all agree that we have a very solid prototype now to build upon.

As an extra, here's a video of James giving it a go:
<iframe src="//www.youtube.com/embed/AdrjKpWoBLk" height="315" width="560" allowfullscreen="" frameborder="0"></iframe>