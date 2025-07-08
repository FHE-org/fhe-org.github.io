<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2025/">Conference 2025</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

# Somewhat Homomorphic Encryption from Sparse LPN
#### by Alexandra Henzinger - 2025.06.19
#### <a href="https://youtu.be/t9Ov7tPxzF8">Presentation recording</a> (Youtube) | <a href="https://github.com/user-attachments/files/21118094/Simons-SparseLPN-talk.pdf"> Slides </a> (Github) | <a href="https://eprint.iacr.org/2024/1760">Paper</a> (eprint) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

<a href="https://lu.ma/opf2g5sj"><img width="900" alt="075 Meetup cover" src="https://github.com/user-attachments/assets/52b89415-e9cf-4c81-b24c-b6aaaf8acf5e" /></a>

# Abstract

In this talk, I will show how to construct somewhat homomorphic encryption from the sparse learning-parities-with-noise problem, along with an assumption that implies linearly homomorphic encryption (e.g., the DDH or DCR assumptions). The resulting schemes support an a-priori bounded number of homomorphic operations: o(\log \lambda) multiplications followed by poly(\lambda) additions, where \lambda is a security parameter. Unlike prior somewhat homomorphic encryption schemes for the class of bounded-degree polynomials, our new schemes do not rely on lattice assumptions or bilinear maps. Moreover, our schemes are conceptually simple: much as in Gentry, Sahai, and Waters’ fully homomorphic encryption scheme, ciphertexts in our scheme are matrices, homomorphic addition is matrix addition, and homomorphic multiplication is matrix multiplication.

Joint work with Henry Corrigan-Gibbs, Yael Kalai, and Vinod Vaikuntanathan (to appear at EUROCRYPT 2025).

# About the speaker

Alexandra Henzinger is a Ph.D. student in the Parallel and Distributed Operating Systems group at MIT, advised by Henry Corrigan-Gibbs. Alexandra works on building computer systems that protect their users’ security and privacy. Much of her recent work has focused on private information retrieval, from designing cryptographic protocols to building a private search engine. She has received an NSF GRFP fellowship and an MIT EECS Great Educators fellowship, and she was selected as a 2024 EECS Rising Star. 

# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
