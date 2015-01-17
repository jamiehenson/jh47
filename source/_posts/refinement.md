title: "Interactive Devices W3: Idea refinement and planning"
tags:
  - arduino
  - collaborative
  - idea
  - interactive devices
  - refinement
id: 599
categories:
  - Interactive Devices
date: 2013-11-06 15:44:53
---

This week was the third Interactive Devices lab session, where we had the opportunity to freely discuss our further actions with this project. Initially, we began by pinning down the software-oriented mechanics of the project: how we would process the raw data we receive from the physical domain, what system we would use for the synthesis of the music using the raw data, and how we would generate the visuals to display during a performance.

For the data processing and visualisation components, we provisionally settled on **openFrameworks** - a large-scale open-source framework for creatively processing data that includes a large variety of functionality from the creation of rich visualisations, to the exporting of MIDI note data. For the software synthesiser, we settled on **FL Studio** (using **LoopBe1** as an internal MIDI bridge), due to the group’s existing familiarity with the program - and our successful use of it in previous projects of a similar nature.

These decisions were made with the original project model in mind (as in, the one outlined and iteratively developed during previous posts) - but after a discussion with Pete Bennett midway through today’s session, we decided to amend our initial model to make Waves To Waves more modular and collaborative. These changes were made in an effort to address a conceptual hole in our original model - how people were actually supposed to interact with Waves To Waves, and how to make it a fully interactive and involving experience.

### What did we change?

Our original intention was to directly map a water wave to sound, using a Kinect camera to track the wave in a tank of water through the identification of floating buoys. We have adapted this into a smaller system that encourages collaboration in order to play. To do this, we propose a smaller tank of water than originally proposed, with several attachable sensor-based components, each capable of producing different sounds and effects. These components can then be added in whichever configuration the user would like, and can be moved to provide different sounds.

Proposed examples of sensors include, and are not limited to:

*   Automated wave generator

*   Manual wave generator

*   Water level sensor

*   Drip emitter/detector

*   Tap for adding water

*   Drain for removing water

*   Motor that swirls water

These will all be custom-made and connected up to a laptop via an Arduino board. With building this, we intend to work in an agile and modular fashion - concentrating on one or two components at a time, and adding new ones as appropriate.

### Why did we change it?

We propose these changes after the realisation that our original vision for Waves to Waves was somewhat limited by its design. By amending the system as outlined above we encourage a more intuitive creation of music from water waves. Rather than generating one wave which in turn creates one sound we now allow the user to create multiple voices using any number of modular components while also allowing for the user to physically interact with the water in the tank.

The new revised system also actively encourages collaboration. The vision is that the modular components will be able to be applied to any size tank, the bigger of which will allow for a larger number of users to intuitively create together. We can see an application for this as a display in a museum or exhibition.

As well as the more intuitive way of creating music and the stronger emphasis on collaboration the new design represents a simpler more streamlined portable design allowing for quick and easy setup and demonstration.

### References:

openFrameworks: [http://www.openframeworks.cc/](http://www.openframeworks.cc/)

FL Studio: [http://www.image-line.com/documents/flstudio.html](http://www.image-line.com/documents/flstudio.html)

LoopBe: [http://www.nerds.de/en/loopbe30.html](http://www.nerds.de/en/loopbe30.html)