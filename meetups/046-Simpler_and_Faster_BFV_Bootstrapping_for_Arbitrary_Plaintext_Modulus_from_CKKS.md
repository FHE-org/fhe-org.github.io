<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2024/">Conference 2024</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->


# Simpler and Faster BFV Bootstrapping for Arbitrary Plaintext Modulus from CKKS
#### by Jinyeong Seo - 2024.02.29
#### <a href="https://www.youtube.com/watch?v=gsvGir-j128&list=PLnbmMskCVh1chnSM8Jjy6Nk3IH6fpn7MM&index=1">Video recording</a> (Youtube) | <a href="https://github.com/FHE-org/fhe-org.github.io/files/14463350/_FHE_org_Simpler_BFV_Bootstrapping.pdf">Slides</a> (Github) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

![046 Meetup cover](https://github.com/FHE-org/fhe-org.github.io/assets/37557436/3f8ba745-6b3b-436c-9c18-913a53eb87c0)


# Abstract

Bootstrapping is a key operation in fully homomorphic encryption schemes that enables the evaluation of arbitrary multiplicative depth circuits.

The conventional instantiation of BFV bootstrapping is accomplished through the digit extraction procedure. However, its efficiency is highly reliant on the plaintext modulus, limiting its use to a specific form—a power of a small prime number.

This presentation introduces a novel approach to instantiate BFV bootstrapping, distinct from the previous digit extraction-based method. The core idea is to leverage CKKS bootstrapping as a subroutine, shifting the performance focus to the underlying CKKS bootstrapping rather than the plaintext modulus.

When executing the bootstrapping operation for a 51-bit plaintext modulus, the proposed method improves upon the previous digit extraction-based method by a factor of 37.9 in latency and 29.4 in throughput. Furthermore, it achieves viable bootstrapping performance for larger plaintext moduli, such as 144-bits and 234-bits, which has not been measured before.


# About the speaker

Jinyeong Seo is a Ph.D. student at Seoul National University, advised by Prof. Yongsoo Song.

His research interests lie in, but are not limited to, the practical instantiation of cryptographic protocols using techniques from lattice-based cryptography.

His recent research focuses on improving the performance of lattice-based proof systems and homomorphic encryption schemes.


# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
