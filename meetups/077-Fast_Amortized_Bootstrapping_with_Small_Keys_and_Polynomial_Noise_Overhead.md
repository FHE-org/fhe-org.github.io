<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2025/">Conference 2025</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

# Fast Amortized Bootstrapping with Small Keys and Polynomial Noise Overhead
#### by Antonio Guimarães - 2025.07.17
#### <a href="https://lu.ma/pgxj2q5l">Register for meetup</a> (Lu.ma) | <a href="https://github.com/user-attachments/files/21300428/Fast.Amortized.Bootstrapping.pdf"> Slides</a> (Github) | <a href="https://eprint.iacr.org/2025/686">Paper</a> (eprint) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

<a href="https://lu.ma/pgxj2q5l"><img width="900" alt="Meetup 077" src="https://github.com/user-attachments/assets/f1a9758e-3c9c-4dd1-a99c-bda85d4c6d5d" /></a>

# Abstract

Most homomorphic encryption (FHE) schemes exploit a technique called single-instruction multiple-data (SIMD) to process several messages in parallel. However, they base their security in somehow strong assumptions, such as the hardness of approximate lattice problems with superpolynomial approximation factor. On the other extreme of the spectrum, there are lightweight FHE schemes that have much faster bootstrapping but no SIMD capabilities. On the positive side, the security of these schemes is based on lattice problems with (low degree) polynomial approximation factor only, which is a much weaker security assumption. Aiming the best of those two options, Micciancio and Sorrell (ICALP'18) proposed a new amortized bootstrapping that can process many messages at once, yielding sublinear time complexity per message, and allowing one to construct FHE based on lattice problems with polynomial approximation factor. Some subsequent works on this line achieve near-optimal asymptotic performance, nevertheless, concrete efficiency remains mostly an open problem. The only existing implementation to date (GPV23, Asiacrypt 2023) requires keys of up to a hundred gigabytes while only providing gains for relatively large messages.

In this paper, we introduce a new method for amortized bootstrapping where the number of homomorphic operations required per message is O(h) and the noise overhead is O(sqrt(h\lambda) log(\lambda)), where h is the Hamming weight of the LWE secret key and \lambda is the security parameter. This allows us to use much smaller parameters and to obtain faster running time. Our method is based on a new efficient homomorphic evaluation of sparse polynomial multiplication. We bootstrap 2 to 8-bit messages in 1.1 ms to 26.5 ms, respectively. Compared to TFHE-rs, this represents a performance improvement of 3.9 to 41.5 times while requiring bootstrapping keys up to 50.4 times smaller.

# About the speaker

Antonio Guimarães is a postdoctoral researcher at IMDEA Software Institute in Madrid, Spain. His research interests include all practical aspects of Fully Homomorphic Encryption (FHE), with particular focus on verifiable FHE, fast bootstrapping algorithms, and efficient homomorphic evaluation of cryptographic primitives.

# Register for the meetup

RSVP for the meetup [here](https://lu.ma/pgxj2q5l).

# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
