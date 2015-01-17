title: Haskell Crunching
tags:
  - haskell
  - java
  - prime numbers
  - sieve of eratosthenes
id: 170
categories:
  - Technology
date: 2011-09-09 15:34:03
---

Before I started Uni, I was familiar with the standard _procedural_ paradigm of programming - you give a subroutine some values, tell it what to do, and some stuff happens. But a few months in to my first year I was introduced to the idea of _functional _programming - the example being Haskell. My lecturer at the time was a massive fan of the Haskell, hailing it as a potentially superior base for an operating system, or other large projects like that - but revealing that its relative lack of popularity on the main scene has kept it back.

The main point laboured was how precise these languages are. Given a constant set of inputs, the same conditions will always occur, and the same answers will always be the result. They're the closest thing to mathematical formulation in a programming language I'll find, they said.

The main thing I noticed was how little code was actually on the page, thinking "is that it?" when I saw that a program that could probably launch a rocket to the moon took up around 4 lines. Thinking of the impending programming assignments I was rubbing my hands together at the prospect of tapping out a few words and calling it a day as this magic language sorted it all out for you, but the reality was pretty different. We were given a choice between Haskell and Java for our final assignment, and I wussed out and took the Java option. But there were robots in that one, so nyeah.

Haskell is a strange language. Based around its 'lazy semantics' (i.e. it only calls what it has to), it's a lot different from the others I'd seen, but can appreciate why its taught. It's immensely powerful, very lenient in terms of data handling (no buggering about with pointers et cetera), and almost seems to intuitively know what you're on about when you hand it values and instructions. It really is like maths. But, like maths, there's little deviation in how you can actually achieve a task. With procedural/OO languages, you can hack at a problem from pretty much any direction and get a round-about answer. With Haskell you can sit for hours until you come up with two lines that solve the entire problem - it's frustrating work, which is why it pays to sit and think it through before you sprint in.

For comparison, below is a version of the upper-bounded Sieve of Eratosthenes algorithm I wrote in Java (topical, since I was working on a number program recently):
<pre class="brush:java">
String getprimes(String args)
  {
    int prinum = Integer.parseInt(args), amount=0, i=0, j=0, k=0, l=0;
    double[] primes = new double[prinum];

		if (prinum == 1 || prinum == 0) return "N/A. Number given is " + prinum + ".";

    StringBuffer pri = new StringBuffer();
    String primecheck = "No.", prodprim = "";

    // Check if 1 is found, this is a dodgy answer, since it is not prime
    // (arguably), and contains no primes
    if (args == "1") 
    {
      pri.append("N/A");
      String prilist = pri.toString();
      return prilist;
    }

    boolean[] PrimeMarker = new boolean[prinum+1];
    for(i=2;i<=prinum;i++) PrimeMarker[i] = true;

    // Mark non-primes in true Eratosthenes fashion.
    for(i=2;i*i<=prinum;i++)
    {
      if (PrimeMarker[i] == true)
      {
        for (j=i;i*j<=prinum;j++) PrimeMarker[i*j] = false;
      }
    }

    for(i=2;i<=prinum;i++)
    {
      if (PrimeMarker[i] == true)
      {
        pri.append(i);
        pri.append(", ");
        amount++;
        primes[l] = (double) i;
        l++;
      }
    }

    pri.delete(pri.length()-2,pri.length());
    String prilist = pri.toString();
    return prilist; 
  }
</pre>
I think we can agree that it's not exactly light on its feet. Now, let's compare that with a similar tiny method in Haskell (a guarded Turner sieve [1]):
<pre class="brush:java">getprimes m = 2 : sieve [3,5..m]  where
    sieve (p:xs)
       | p*p &gt; m = p : xs
       | True    = p : sieve [x | x&lt;-xs, rem x p /= 0]</pre>
When running the programs, the Java algorithm stalls and belches all the numbers out in one big lump, whereas the Haskell one reels them off one by one. I can't tell which is quicker by eye, there's no discernible difference. But for me, as a beginner to functional languages, the Java version is considerably easier to read and debug, despite its size. The Haskell version is easy to follow, but not easy to understand exactly why or how things work as they do, especially coming from more verbose languages such as Java.

It's probably worth sticking at, since these languages may well rise up in the future. But looking at people who have made 3D first-person shooters and the like using them, well, hats off to them, I haven't the first idea!

References:
[1] [http://en.literateprograms.org/Sieve_of_Eratosthenes_(Haskell)](http://en.literateprograms.org/Sieve_of_Eratosthenes_(Haskell))