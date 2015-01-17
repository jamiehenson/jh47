title: Numbertricks - product of primes
tags:
  - analysis
  - java
  - number
  - of
  - primes
  - product
id: 144
categories:
  - Technology
date: 2011-09-03 22:43:59
---

After letting my brain turn into a potato for many weeks over the holidays, I decided to keep my programming head warm with a bit of Java. So, I've been adding to a program I started about a week ago in the odd hour I have free to perform analysis on a single number, telling you features like its factors, what sequences it's part of (Fibonacci etc) and various information about associated prime numbers.

The most recent thing I've bolted on to it was the algorithm to determine the product of primes of a number, something that used to drive me round the bend working out by hand in Discrete Maths 1 last year. Couldn't find any code similar to this on the net, so I thought I'd post it in case anybody stumbles upon it here and finds it helpful. It won't compile on its own since it depends on other sub-routines, but the process is here:

For a bit of context on the inputs, the integer **prinum** is the value to test (lazily inheriting its name from the parent method), and the double array **primes** is an array of primes acquired from the parent function using my implementation of the Sieve of Eratosthenes algorithm.
<pre class="brush:java">String getProductofPrimes(int prinum, double[] primes)
  {
    int i=0,k=0;
    double dpri = (double) prinum;
    StringBuffer products = new StringBuffer();
    String prodprim = "";

    for (i=0;i&lt;prinum;i++)
    {
      // Work up through the primes found before. If it is a factor, include
      // and recurse. If not, move on to the next prime. Divide through.
      while (((dpri/primes[i]) == Math.ceil(dpri/primes[i])) &amp;&amp; (dpri/primes[i]) != 1)
      {
        products.append((int)primes[i] + " * ");
        dpri = dpri/primes[i];
      }
      // If the number found by dividing through is prime, you're done
      for (k=0;k&lt;prinum;k++)
      {
        if (primes[k] == dpri || dpri == 1)
        {
          products.append((int)dpri);
          prodprim = products.toString();
          return prodprim;
        }
      }
    }
    prodprim = products.toString();
    return prodprim;
  }</pre>
I'm aware it's not very complex and probably not that efficient but hey, I'm fairly new to Java! At 400 lines for the main program I'm keen to see what I can extend it to, any nerdy suggestions would be welcome :) The compiled program can be [found](http://jh47.com/code/Numbertricks.class) on the Past Projects page, and is updated as I add to it.