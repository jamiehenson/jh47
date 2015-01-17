title: "Interactive Devices: Wrapping Up"
tags:
  - arduino
  - conclusion
  - design process
  - interactive devices
  - project
  - waves to waves
id: 658
categories:
  - Interactive Devices
date: 2013-12-19 21:52:11
---

Over the course of the past two months, I, along with two others, have developed a musical interface from scratch, using commonly available parts and software tools. We started by brainstorming with simple notes and ideas, and ended with a fully fledged prototype that we performed with in front of our class and lecturers. I have been keeping a blog throughout this whole process, which describes each of the stages in greater detail (a complete list of posts available [here](http://jh47.com/category/university/interactive-devices/)), but in this post I will wrap up what we did, as a rounded conclusion to the project.

### <span style="line-height: 1.5em;">Coming up with Waves To Waves</span>

<span style="line-height: 1.5em;">As I said in the opening paragraph, we started with nothing - coming together with a stack of Post-It notes and a small amount of time to fire out ideas to each other. We all knew that we wanted to do a musically-oriented project due to our respective musically-involved backgrounds and interests, but that was it. We started with ~30 ideas, ranging from the feasible to the comparatively ridiculous - but at that stage, no idea was a bad idea, as all steps helped to bring us closer to the final topic. Eventually, we narrowed it down to around four primary ideas, ranging from a tangible speaker that you physically manipulate to alter the sound, to a three-dimensional laser based instrument that uses fog as an interactive medium. However, we all settled on the concept of a "water-based musical interface", a small handful of words that would eventually turn into Waves To Waves (**WTW**).</span>

Once we had one idea, we set about refining it, narrowing down the scope so that we could specifically say what parts we needed, and how we would build it. This wasn't a one-time process, as our [first final idea candidate](http://jh47.com/2013/10/finalidea/) was notably different to what we ended up with - starting with a row of buoyant balls that are tracked by a Kinect as they bob up and down on the water as the surface is disturbed.

WTW as it is today came about after discussions with Pete Bennett and Paul Worgan, who are researchers in the University of Bristol BIG lab with an active interest in musical interfaces. We initially pitched WTW as a large installation with a strong expressive performance element and a strong mathematical foundation (that literally turned physical waves into sound waves via a one-to-one mapping), but Pete and Paul recommended that we go down a more user-friendly, collaborative route. Taking on board their advice, we down-scaled WTW to something that could "fit in a backpack" (it can), and placed the focus more around ease of use and a pleasing audible result, instead of an accurate mathematical simulation of wave mechanics.

### Developing the prototype

By this point in the design process, we knew actually what we _wanted _to build. It was just a matter of building it. Before starting however, we needed to gain more experience with the tools we aimed to use, and so each of us spent a week learning how to use the Arduino, and how to use Pure Data. This was a valuable step as it allowed us to step ahead more wisely by knowing the advantages and the pitfalls of the tools we were using.

WTW purposefully has a very simple and cheap construction. The "water tank" is a storage container bought from Wilkinsons, the sensors were bought for ~£4 a piece off eBay, and the wooden frame was constructed from some wood sitting in the garden of my student house. Also, a friend of ours, Tom Mortensson, kindly allowed us to borrow some of his 3-pin cables for hooking up the sensors to the Arduino, as well as a sensor shield for making interfacing more of a plug-and-play operation. Nonetheless, the final product comes together quite well, and proves how you don't have to have a large budget to build a functioning musical interface.

[caption id="attachment_661" align="aligncenter" width="680"][![The final Waves To Waves prototype](http://jh47.com/wp-content/uploads/2013/12/2013-12-08-16.35.14-1024x757.jpg)](http://jh47.com/wp-content/uploads/2013/12/2013-12-08-16.35.14.jpg) The final Waves To Waves prototype[/caption]

### Preparing the performance

Since we had what was basically a complete product (in a physical sense) by the start of December, we looked towards preparing a performance, and tweaking WTW so that it functioned better within a live environment. We experimented with playing it collaboratively with other instruments. We experimented with different musical styles and sounds. Essentially, we strove to explore what water lent itself best to as a transmissive medium for a musical instrument.

We found that due to the lack of precision of both the movement capabilities of water, and the inexpensive water depth sensors we had purchased, WTW wasn't suited to fill the role of an instrument designed to play a melodic line. Instead, similarly to [Kugelschwung ](http://www.eecs.umich.edu/nime2012/Proceedings/papers/131_Final_Manuscript.pdf)(an older project of mine that also used a cumbersome mechanic for generating music), we decided to have WTW generate ambient soundscapes that played more of a supportive role in a wider musical arrangement. Therefore, for the debut musical performance, we employed two keyboard synthesisers to create a fully-textured musical performance.

Footage of this debut performance (embedded in the [previous ](http://jh47.com/2013/12/performing/)Interactive Devices post) is available [here](http://vimeo.com/81500664).

### Preparing the paper and video

Despite having scope for six pages, we found the CHI paper layout to be relatively restrictive in terms of how much we could actually include, and so we had to be rather selective in what we included in the paper. Thus, we thought it was primarily important to include these sections:

*   An introduction to the project
*   A brief review of previous articles of related academic literature
*   An overview of the hardware and software behind Waves To Waves
*   A discussion on how it fits within the wider HCI community
*   A discussion on how Waves To Waves could be expanded to further our concepts

While the paper does a good job of describing the past, present and future of Waves To Waves, it doesn't show it in action - and so this is where the affiliated video fills a valuable gap. We aimed to make the video as approachable as possible, by presenting it in a similar style to how we presented the interface to peers and lecturers on the 10th of December. Below is said demonstration video:

<iframe src="//player.vimeo.com/video/82002186" height="281" width="500" allowfullscreen="" frameborder="0"></iframe>

### Thoughts on how we did as a group

Before the project, James, Ben and I were all good friends, and so working together was painless since we already knew what each of our skills and preferences were, and since we felt we could be completely honest with each other during design discussions. Furthermore, despite initially feeling at a disadvantage, we felt that working in a three was actually preferable to working in a larger group (the average group size was five), since there was less of an overhead from team management, and less conflict from design disputes. We kept a very agile working form, kept constant communication, and ensured that each of us had a job to do - where progress was constantly and immediately reported. Moreover, we met and worked together regularly - as our smaller group size meant that collectively we were more flexible in terms of how we worked.

In terms of our performance as a group I have no regrets or criticisms. All members of the team pulled their weight equally, and all added valuable contributions which pushed the project forward. I took the lead on the software that sat between the interface and the proprietary synthesiser that generated the sound, James took the lead on the video, and Ben took the lead on the paper - with each of us contributing in all areas to varying degrees.

### Final words

My parting word on this project is that it truly has been a lot of fun - in a world of strict assignments and theoretical rigidity, it was refreshing to get free rein to make something I actually wanted to make, employing my existing technical and musical knowledge. Since I'm very interested in musical interfaces, and indeed music itself, I feel that I learned more in this assignment by exploring technologies and methods in my own time than I would have by reading a textbook or a series of papers on topics I care little for. Thus, I would heartily recommend this unit to any current third year Computer Science students at Bristol, especially if you're creatively minded. It's a rare opportunity to put a little of yourself into the work.