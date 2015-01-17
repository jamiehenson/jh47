title: "Hackintosh: reclusion and redundant rebooting"
tags:
  - hackintosh
  - mac
  - windows
id: 1
categories:
  - Technology
date: 2011-08-02 00:04:36
---

We can't help but be taken in somewhat by Apple's advertising campaigns - you've got to hand it to them. We know that Windows machines are capable and, in my opinion, arguably more practical - but we don't _want_ them in the way we want the reassuringly expensive sheen of a MacBook Pro. For a good while now I've been curious to try the Mac OS X operating system out for a period longer than I can linger in an Apple Store, and with the ever growing presence of Mac machines owned by my friends, I investigated a way of getting the system without forking out the serious cash required for the hardware.

It is possible. A stroll through a minefield whilst blindfolded mind if you don't have the help, but indeed possible. If you're primarily a Windows user like myself, you may well be interested in having a go at this yourself. Had a kind of hollow victory in the end, but I'm tapping this out from Mac OS X, so, it worked! I'll go through my steps and findings, to save you the considerable research time.

Initially, I was after a hard booting system that ran Mac on my (primarily Intel-based, which is important) hardware from the start. I'll cut straight to it, for this you'll need:

*   A legally acquired copy of Mac OS X (whether this be a retail disc, or an image from your retail disc in .dmg format - Snow Leopard is recommended)
*   A bootloader (the most supported and up-to-date one being iBoot in my opinion)
*   Patience
*   But, most importantly, compatible hardware. Google your hardware specs (chiefly your motherboard and CPU) coupled with the term 'hackintosh' and there will most likely be some sort of confirmation as to whether it will work, whether it will work after divine intervention, or whether it will just shake its head at you forever. There are numerous tables around documenting compatibility statistics.
There is a comprehensive guide on the internet, which takes you through the process of installing Snow Leopard (the second newest version at the time of writing) onto a PC [step by step](http://tonymacx86.blogspot.com/2010/04/iboot-multibeast-install-mac-os-x-on.html). It's a great guide which I highly recommend for this - the purpose of this post isn't to duplicate that. The guys behind it also write the software required, so they're considerably more knowledgable on the topic than me - I'm just filling in the gaps. To download the software required, you need to sign up to their forum, but this is a simple step that only takes a few seconds. You need iBoot, Multibeast and possibly, depending on your hardware, UpdateHelper.

Potential problems and fixes:

*   To actually install the operating system, you need to burn your OS X image to something (if you have no disc), but the file is too large for a normal DVD. If you have a dual-layer DVD, fantastic, but if not, there is a program called [TransMac ](http://www.acutesystems.com/scrtm.htm)which does a great job of expanding your image file and providing you with a facility to write the image to any form of removable media, such as a memory stick or an external hard drive. The program is shareware, but the demo has a 15 day trial, so no worries.
*   Following the tonymacx86 guide, when you come to installing the latest combo update for Snow Leopard, you may find that the installation crashes with a Kernel Panic (see later in the post) and forces you to start all over again. This happened to me with my Intel i3 processor, it may not happen to you. To fix this particular problem, you need to install a thing called UpdateHelper and reboot before attempting the installation. It's designed for installations on a Sandy Bridge chip system but has applications with previous chips, I've found.
Jargon names for occurrences you may bump into:

*   The ominous grey box with "You need to restart your computer" in various languages that marks the death of your computer's current life is called a **Kernel Panic**. You should try and avoid this at all costs.
However, I followed this guide through over and over, analysing every last detail of it, because for me it did not go anywhere near as smoothly. I was stuck in a loop of unsuccessful boot after unsuccessful boot, error after error, and attacking my laptop with a screwdriver to swap hard drives. I was getting nowhere. Thus it lead me to abandoning the "hard boot" method, and taking up a far more lenient (or should I say less punishing) method - virtualisation. Virtualisation is notoriously slow, but it poses two highly appealing advantages: it allows me to keep and also use my old Windows installation at the same time as my Mac installation, and it greatly reduces the impact of differing hardware. Thus, I achieved what I wanted... kind of. It just seems like the Mac is allowed to run around and play, though only with the permission and supervision of Daddy Microsoft, watching in a lackluster fashion from the side of the creche.

Was the whole thing worth it? Not sure. This whole process spanned over a good 3 days (off and on) and so certainly isn't a quick fix job. That said, I like the operating system, but certainly wouldn't defend it to the death like some Mac users. There's nothing I can do here that my Windows computer can't do. And let's face it, Windows is designed to run on all flavours of hardware regardless of manufacturer, Linux is decent at it too, but Mac's stubbornness in this area takes the sheen off for me. It's polished, yes, but because it's designed for a far narrower channel of hardware than its competitors. Maybe I need more time to explore it, but that's my initial impression, and that's worth a lot to the lasting impression.

Would I buy a Mac computer? No. The operating system by itself was good value to buy, and I wouldn't turn one down, but I can't justify putting the money down when considering the other options. The marketers though, give them a prize.