title: Do I like concurrency? Yes and no.
tags:
  - ants
  - concurrency
  - multicore
  - xc
id: 207
categories:
  - Technology
  - University
date: 2011-11-08 16:55:20
---

That title comes from a dire pun of one of my coursemates, I couldn't think of something better so I dropped in his comedic witticisms.

Today when we hear about modern computers we're guaranteed to hear about multiple cores, they're even a selling point in most cases. Then again, how the stores advertise on TV isn't exactly a decent reflection on what the machines they're selling actually have and can do. "2000 photos? But this one can hold 2100 photos, and it's HD!" comes to mind. Regardless, more cores are generally better, but they're only useful when software is programmed to make use of them. That's why students like me have to learn to do that. Eep.

The concepts behind multi-core processing seemed pretty simple when we were first introduced to it. You take a task, and split it into two, or four. Or, you just run two or four tasks alongside one another. However, when actually coming to write code for concurrent applications, it soon became clear just how much of a task it actually is. Traditionally, programs and algorithmic thought processes work sequentially, i.e. you do this, then this, then this and then you spit out this. Here, you do that, but in four different places at the same time, and each separate thread of processing may well need things from other threads, and so they have to wait for each other at certain points until one of them has finished. A whole raft of problems come in - what if all threads are waiting for each other? What if one of the threads never makes it? In these cases something called 'deadlock' comes about, which is like four equally dodgy drivers hesitantly waiting at a crossroads for someone to go. Controlling multiple cores is like herding cats if you're new to it.

The language we're using at the moment is one called XC, which is based upon the old timer, C. There are more widespread languages such as OpenCL et cetera, but the company behind the language, XMOS, has strong footings here in Bristol, and one of our lecturers wrote the thing, so that's kind of grounding for the decision (or something like that). Plus, we got some snazzy boards to play with, which beep and are able to play the Pingu theme tune with enough musical dexterity on the on-board buttons. XC's not a bad language, but while it kindly does away with memory pointers (those little buggers), it strangely omits things like floating point operations, so it's just integers. I grew to dislike it however after only the first marked assignment (about ants gathering food). Maybe it's the concurrency principle behind it. Or maybe I just hate ants. Who knows.

One thing that's clear though is that this whole concurrency business is pretty damn important. I (well, me and another CompSci) used multithreading last year for a Java game, and that didn't seem anywhere near as difficult as even this small portion of XC I have seen. That's the thing I suppose with computing, everything seems easy and is taken for granted until you use something less intuitive, or you strip away the abstraction and take a peek at what's underneath. Then it's just a matter of how far you go until your head is completely blagged.