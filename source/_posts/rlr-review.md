title: "Reflexive loopers for solo musical improvisation: a brief review"
tags:
  - chi
  - chords
  - devices
  - guitar
  - interactive
  - jazz
  - live
  - looper
  - reflexive
  - rocksmith
id: 521
categories:
  - Interactive Devices
date: 2013-10-01 10:21:26
---

Whilst reading through the proceedings from this year's CHI conference, this paper [1] caught my eye especially - due to my interests in both musically-oriented computing and jazz.

In terms of a concept, the reflexive looper (or RLR as it's referred to in the paper) would definitely benefit me as a musician, as it directly tackles two of the main issues I encounter when practising alone - the absence of adaptive interaction between musician and a loop pedal, and the "stylistic mismatch" between musician and "minus-one" recordings which omit the part you are playing.

<!-- more -->

The way it works is interesting, employing a wide host of machine learning techniques to isolate features from live performance - extracting attributes such as the pitch extremities and the variance of pitch over a set time window. Using this information, the RLR is able to dynamically and interactively simulate the other two members of a jazz trio using one musician's input (regardless of whether they're playing bass, melody or chords) - which is highly impressive.

Unfortunately, while the RLR liberates the musician from "canned music", it imposes the restriction of having to provide training data in the form of a chord chart beforehand, and requires MIDI information as well as a live audio stream. This significantly slows the process of self-accompaniment.

The implementation as demonstrated in the affiliated video capably shows how the RLR works, but not to a standard that I would be comfortable using myself as a musician. That said, this is a concept, which if embraced commercially, could evolve into a highly successful product. Indeed, commercial "band in a box" packages do exist, such as the Session Mode in the upcoming game Rocksmith 2014 [2], but an RLR provides a more portable interactive accompaniment solution without the specific need for a computer or games console.

<iframe width="500" height = "300" src="//www.youtube.com/embed/Xp8tixrPM1U" frameborder="0" allowfullscreen></iframe>

**References:**

_[1] Reflexive loopers for solo musical improvisation, F. Pachet et al. (CHI 2013),
_[http://dl.acm.org/citation.cfm?id=2481303](http://dl.acm.org/citation.cfm?id=2481303)

_[2] Session mode in Rocksmith 2014, Ubisoft (2013),_
[http://rocksmith.ubi.com/rocksmith/en-GB/features/index.aspx](http://rocksmith.ubi.com/rocksmith/en-GB/features/index.aspx)