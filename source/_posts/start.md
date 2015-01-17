title: "Interactive Devices W2: Initial experimentations"
tags:
  - arduino
  - devices
  - experimentation
  - ideas
  - interactive
  - kinect
  - oculus rift
  - refine
  - start
id: 573
categories:
  - Interactive Devices
date: 2013-10-25 11:57:54
---

Last week, we came up with ~30 musically-inspired project ideas and gradually narrowed that number down to two main ideas - Waves To Waves (**WTW**), and the Tangible Speaker (**TS**). This week, the ultimate aim was to reduce that number down to one idea - the one that we would roll with and gradually expand until we had our final plan with a confirmed list of aims, hardware requirements and potential uses.

We discussed this decision immediately, and unanimously decided that we would go for WTW over TS. This was because of the greater emphasis on software for WTW over hardware, which would have been the primary focus of TS - and the admission that software was our stronger area. Furthermore, from a musical and expressive point of view WTW was more interesting - since it involves the generation of live music and visuals from a physical environment, instead of just modulating existing sound.

<!-- more -->

We had our idea set, but that was just the start. The next step in the process was to discuss in greater detail what the interface would do (specifically), what the physical configuration of the interface would entail, and what equipment we would need to make it happen.

Firstly though, we started by unpacking and configuring an Arduino starter kit,  which we had been presented with at the very start of the session. None of us had any prior experience with an Arduino board (as by our own admission, none of us are particularly hardware-oriented), and so since it was one of the recommended and most available tools at our disposal we set towards learning more about the board.

Using the book that came with the kit for guidance, we wrote and uploaded a simple program to the board that made an on-board LED flash at timely intervals. We then expanded the base Arduino board with a configurable solder-less board (a "breadboard") and went on to make a simple Theremin using a light sensor as an input mechanism - much to the aural disadvantage of our peers.

[caption id="attachment_580" align="aligncenter" width="800"][![IMG_7018 cut](http://jh47.com/wp-content/uploads/2013/10/IMG_7018-cut.png)](http://jh47.com/wp-content/uploads/2013/10/IMG_7018-cut.png) The first Arduino test: an LED switch[/caption]

Satisfied with our brief introduction to the workings and usage of an Arduino, we investigated two demos that were set up elsewhere in the lab, featuring an Oculus Rift and a Kinect respectively.

Following on from the demos, we spoke to Sri Subramanian, Jarrod Knibbe and Pete Bennett about our idea, in an effort to take on-board their wider knowledge of interaction techniques, and the respective feasibilities of implementing those techniques. They suggested that instead of tracking the wave motion of the water using just a camera (a task that we hadn't figured out how to approach), we should place buoyant objects on the surface and monitor their movement, either via the camera or by accelerometers embedded inside the objects.

We refined this idea by proposing a line of buoyant balls, equidistantly spaced from each other across the length of the clear tank and anchored to the bottom by a light, inextensible string (fishing line). The string would pass through the balls, so that the movement of the balls is constrained strictly to the vertical plane. This way we can observe the wave motion (via camera) nicely by interpolation, using the balls as the nodes of a curve. More on this will be outlined in the next post, which will describe the final idea in greater detail.

To conclude, today's lab was useful in that we successfully narrowed down from two ideas to a final one, and began to travel down the path of pinning down the details of what's required to turn that idea into a fully-fledged project. The very next step for now though, is to delve into related works of academic literature (most likely from CHI and NIME) to get an idea of what is out there, and what we can take from other projects to both positively bolster our end-result, and also differentiate it from existing projects.