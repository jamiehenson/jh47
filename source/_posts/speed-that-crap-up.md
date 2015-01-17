title: "Speed that crap up!"
tags:
  - fft pattern matching algorithm
id: 231
categories:
  - Technology
date: 2012-01-15 01:27:23
---

Lectures on difficult topics tend to be overwhelming - you sit there and derp away in the lecture theatre, and it's not until later when what you've been presented with is used in a practical application that you understand the gravity of it.

A recent assignment opened up a whole new thought process when it came to writing programs.

Computers are fast right? Surely it doesn't matter how long what you write will take to work when its of this scale, as long as it works? And computers have loads of memory, it doesn't matter surely if it takes up a little bit more room than needed?

<!-- more -->

Wrong actually. It would have been so easy to write a program for the topic at hand ([string matching with wildcard characters](http://stringpedia.bsmithers.co.uk/index.php?title=Exact_Pattern_Matching_With_Don "Exact_Pattern_Matching_With_Don")) that ran in a way that still seemed instantaneous for moderately small inputs. Instead, we discovered how much of a ballache, yet how useful faster methods are, when you're using large, and realistically sized inputs.

Using a method called FFT (Fast Fourier Transform), the program I eventually completed ran considerably quicker than how it would have in the way I would have first thought of (for maths types, in O(nlogn) time as opposed to O(n^2)). Instantaneous for small inputs, but when I fed War &amp; Peace in, and told it to match a small bit of text, the result came back within a blink of eye - as opposed to seconds. Still not a great difference. But take a look at this:

![](http://recursive-design.com/images/posts/2010-12-07-comp-sci-101-big-o-notation/Time_Complexity.png)

FFT runs along the purple line. The easier approach runs along the blue line. You can see how the time taken gets quickly out of hand with the blue line as the number of elements grows. _(picture (c) Recursive Design - [http://recursive-design.com](http://recursive-design.com/))_

Worth doing then, I reckon. Even though the algorithmic processes behind the FFT are in no way obvious, or even understandable without a decent amount of study, it's obvious by looking at the graph just how much it helps. That's the beauty of well designed software programs today. They're very approachable and simple to use, giving the illusion that there's not much to it, but in reality there's things like this chugging along in the background, doing the menial tasks almost instantly, so you're not there tapping your fingers on the desk waiting.

It just shows how much of an upward curve there is to progress. Every step to make things faster requires a new way of thinking that pushes the boundaries of what's possible, and it's only when something is proven to be running within minimum time that it's time to move on. Or perhaps you just look into other approaches. Without this, we'd still be stuck with Windows 95, or even, with no computers at all. This stuff is incredibly important to learn, and is certainly worth sticking at.

It's still a complete pain in the arse to do though, mind.