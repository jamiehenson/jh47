title: Android tinkering
tags:
  - ace
  - android
  - cyanogen
  - galaxy
  - gingerbread
  - samsung
id: 304
categories:
  - Technology
date: 2012-03-31 10:04:36
---

Recently, I chucked out my old Nokia 5800, which I'd had for many years - I was on a rolling contract that was far too ambitious to fill (given the amount I actually use my phone for calls...) and saw a lesser contract with an Android phone for a cheaper price, so I took it.

I got a Samsung Galaxy Ace, which in comparison to other Android phones I've encountered (S, S2, Defy, Desire, Wildfire) is a modest and capable phone but with a few notable limitations. I set about minimising the effect of those limitations to get the most out of it I could. I'm stuck with it for 2 years, after all. While these steps suit the Ace, they should suit any Android user, so they may help you too.

Firstly, the phone has a woeful amount of internal storage (around 160MB). With no extra steps, most apps you download will sit right on the phone itself, and, along with all the basic phone data (messages, contacts etc...), 160MB won't get you very far. Therefore, the solution is to utilise the phone's SD card, which you can easily replace for a larger capacity up to 32GB. An app called [Link2SD](https://play.google.com/store/apps/details?id=com.buak.Link2SD&amp;hl=en "Link2SD") does just that, by allowing you to transfer all apps to the SD card. The result: a lesser-burdened phone that has almost no app/storage limitation.

Step two: all smartphones have a reputation for having tragic battery life. When I was a lad, my Nokia 3210 would last for a good fortnight, and was tough as old boots. Lightning could strike it, and the only result would be a full battery. These new phones aren't so resilient, and there's no sure fire way to reduce battery usage. However, these steps help:

*   No GPS at all if you can help it. It drinks battery.
*   Turn the background light down to 10%, and/or get an app to automatically turn off the screen when you're not using the phone. The display is one of the main drainers.
*   Turn off auto-sync, or increase the amount of time between app scans. You're not desperate to check your Facebook every 10 minutes, right?
*   Don't leave Wifi on when you're not using it, and switch to a 2G network if you have a strong signal.
*   Don't have an animated wallpaper, and stay off the games. CPU usage = battery drain.
Basically, don't run a small Estonian village off it.

However, there's one step I recently took that required a little more effort. The standard Android OS (Gingerbread in my case) ran fairly well on my phone, although I had noticed general lag and had heard about custom distributions that significantly improve performance by cutting out some of the bloatware in the background. I installed CyanogenMod (7.2 RC1) last evening, and I've encountered no difficulties - aside from having to manually install the Google Play app to download the rest.

It's by no means a simple operation, all the steps are listed [here](http://forum.xda-developers.com/showthread.php?t=1543521). It involves installing a recovery program (ClockworkMod), backing up all of your data, and replacing the phone's operating system (duh) from your correctly-formatted SD card - which means you're essentially starting again. I kept my contacts, but I lost all my messages. Not a problem since I just got my phone and didn't have that many, but for those who like to hoard messages for laziness or sentimentality, this will force a clearout :). Quite a few scary loading screens involved for those unfamiliar!

Anyway, CyanogenMod is working an absolute treat. Angry Birds Space crawled before, now it runs flawlessly. Menus snap open, and with cooler effects. The only downsides I encountered were that the CyanogenMod torch didn't work (Gingerbread didn't even have a torch app), and that the front buttons flashed on and off from time to time, which is quite distracting. For the first, I just got a third-party app for a torch. No worries. For the second, I got an app which forced the button lights on or off. Sorted.

If you have a Galaxy S2, or some other NASA-powered device (relatively speaking), then this probably isn't worth doing. But, since I can't upgrade to Ice Cream Sandwich (officially), this is the best hope for the Galaxy Ace for now. My friend's Wildfire, a worse phone in many respects, couldn't even answer calls without crashing, now it's running as smooth as anything.