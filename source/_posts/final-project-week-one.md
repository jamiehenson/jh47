title: "Final Project: week one"
id: 679
categories:
  - Final Project
date: 2014-02-02 22:23:15
tags:
---

It's been a week since the end of my January deadline onslaught, so after a couple of days of recovery I set towards starting the project that's set to take over the entirety of this term. For one of the units last term, Interactive Devices, I kept a "blog" of sorts, which documented my progress throughout the mini-project. I found it helpful, so I thought I would try it here as well. Here goes.

To put it in its simplest terms, I'm building a reverse musical visualiser. Something that takes any visual input, whether that be from a film, a game, or a person's general activity on a computer screen, and converts it into music that somehow represents that activity. The purpose is mainly for individuals who are creating visual media, and want to test how certain types of soundtrack would fit with the content - for example a film maker who hasn't chosen their sound yet, or a game developer who's making a procedurally-generated game. I don't actually have a name yet.

The first thing I did was to break down music into its seven constituent parts: Dynamics, Tempo, Timbre, Rhythm, Melody, Harmony and Texture. I then decided how each of those parts would be represented inside my generation algorithms. The less-subjective parts of music (tempo, texture, timbre and dynamics) were easy to map to a set of visual features. The dynamics and texture would depend on the global rate of change of pixel colours, the timbre would depend on the types of colours that had high activity, and the tempo dependent on rhythmic spikes. But the melody, harmony and rhythm are going to be more difficult.

There lies another set of questions that fundamentally underpin my program's functionality:

*   Where will the input be - through a camera, or on-screen?
*   Will the music be generated completely via visual features, or will the features control parameters of a template piece?
The answer to the first is easy - on screen. The noise introduced via a camera feed would be too much, and it goes against the true purpose and intention of my application.

The answer to the second is a matter of accuracy vs. practicality, and one that will probably surface after another week's worth of development. My feeling already though is that the priority is a fluid and appealing demo, and so the lack of distinguishing features in a desktop stream may result in a very bland piece of music. Therefore, the second option may be more appealing - to have the visual features control an underlying skeletal structure. But I'll go more into that after I've done some research.

With respect to the actual application itself, I have so far written a Python program that takes a pixel map of the whole screen via the QT framework, divides it into colour-matched blocks, and counts the blocks. I can watch this mapping via a display maintained by the PyGame framework.

The basis for this was a Python bot that could play Bejeweled, as the basis of the bot was fast colour detection on-screen. I changed it by stripping out all of the mouse manipulation controls, and significantly enhancing the colour detection algorithms. My first foray into Python, so going well so far.

Another issue was cross-compatibility. It worked flawlessly in Linux, but it straight up didn't work in Windows or Mac. I swapped out "autopy" for PyQt, which was both faster and allowed Windows to play. I tried swapping out PyGame for Pyglet to allow 64-bit compatibility, but it didn't work how I wanted it to - as in, the "app lock" thing was really problematic. PyGame has plentiful support, and it just worked. So Mac will have to wait for now. The issue with Mac was that PyQt needed to be 64 bit for some reason, and PyGame only works in 32 bit. Crapple.

&nbsp;