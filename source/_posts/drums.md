title: "The cheapest electronic drumkit you'll ever have!"
tags:
  - drums guitar hero rock band ps3 real electronic
id: 211
categories:
  - Music
  - Technology
date: 2012-01-04 00:13:00
---

At University, I've kind of taken it on as a bit of a personal project to collect a full set of gadgets for the Rock Band/Guitar Hero games. Being a PC gamer primarily, and not having a console, having a PS3 in the flat in Bristol meant that I could get into these games for the first time - little did I know how hard the kit was to get hold of, cheaply.

The drums were the last piece of the puzzle, and when I got them (after spending a paltry £20), I thought - hold on, these drums are basically just a series of MIDI triggers, can I make them into a real electronic drumkit?

Turns out, you can. And the software already exists for you to do it as well, pretty easily.

<!-- more -->

You'll need these things:

*   The wireless dongle from your Guitar Hero drum set. (not tested with the Rock Band set, but similar should apply)
*   [PS360MidiDrummer](http://jh47.com/files/PS360MidiDrummerv0.031BinOnly.zip) (rare to find, so I've hosted it here)
*   [LoopBe1](http://nerds.de/en/loopbe1.html) - an internal MIDI channel
*   A DAW (Digital Audio Workstation) that can handle MIDI. I used [FL Studio](http://flstudio.image-line.com/).
*   [ASIO4ALL sound drivers ](http://www.asio4all.com/)- for super nippy sound.
*   For icing sugar, a good drumkit VST for use with your audio program, I used [EZDrummer](http://www.toontrack.com/products.asp?item=7).
<div>Here's how all the pieces fit together. Firstly, ensure that all the software you need is installed (LoopBe1, FL, EZDrummer etc) before you start. Then, plug in your wireless receiver into a free USB port. Windows (the operating system you'll need, by the way) should then download the necessary drivers for it to see the receiver as a new USB controller device. But that's all it is, for now, you won't be able to use the drumkit for anything useful yet.</div>
<div></div>
<div>

Next, run PS360MidiDrummer. This is a handy program that interprets the hits from your drums, and converts them to MIDI signals, which you can choose (to change the sound of the "yellow" drum to a cymbal, or tom, or cowbell or whatever, for example). This is all well and good, but realistically, MIDI sounds sound like arse, and there'll be quite a delay between you hitting the drum and a sound coming out. This is no good. So, in the lower left of the PS360MidiDrummer window, select "LoopBe1" from the list of MIDI outputs.

</div>
<div></div>
<div>

What LoopBe1 does is act as an internal patch cable, of sorts, by allowing software programs to send MIDI to each other. Imagine plugging your MIDI keyboard into your computer, but just doing it all inside. With this, you can configure your audio program (such as FL Studio), to receive LoopBe1 as an input, and there you go - your MIDI signals are going through.

</div>
<div></div>
<div>

In the context of FL Studio (which you can get a demo for, for free), go into Options and select LoopBe1 as a MIDI input, as I said, and then go into the Audio panel of Options and select the ASIO4ALL drivers. This means that FL Studio is getting the signals from your drums, and that the latency problem of before has gone (or is notably reduced), due to the faster sound drivers. If the latency problem still persists, tweak with the buffer sample size of your ASIO drivers to get the right balance between speed and quality.

</div>
<div></div>
<div>

Then, pick a sound synth to make your sounds. I used EZDrummer, but you could use whatever drum (or any instrument, really - though it would make a pretty limited piano!) synth you wanted.

</div>
Not that hard a thing to get running! Next, I don't see why you couldn't configure a Guitar Hero guitar to play the notes of a real one, using a similar process. And you can even use them as actual gaming controllers, using JoyToKey.

Here's a video of me using them:

<center><iframe src="http://www.youtube.com/embed/puV48lPni60" frameborder="0" width="420" height="315"></iframe></center>