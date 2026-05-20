<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2026/">Conference 2026</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

# FHE in Production
#### by Rotem Tsabary - 2026.02.26
#### <a href="https://luma.com/FHE.org-085">Register for meetup</a> (Lu.ma) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

<a href="https://luma.com/FHE.org-085"><img width="900" alt="Meetup 085" src="https://github.com/user-attachments/assets/6488d4d9-a994-467b-8fce-7d402f74c05f" /></a>

# Abstract

Fully Homomorphic Encryption (FHE) has long promised the ability to compute on encrypted data, but real-world deployment has been limited by performance, usability, and system integration challenges.

This talk presents a production-oriented view of FHE, focusing on what changes when encrypted computation is treated as a systems and execution problem rather than a purely cryptographic one. It introduces a GPU-native approach to FHE, where ciphertexts are represented as tensors and homomorphic operations are expressed as batched, parallel programs that map directly to modern accelerators.

The presentation covers the architectural principles behind this approach and includes a practical example of how FHE programs are written and executed on a GPU, from ciphertext layout to custom kernel execution. The goal is to give practitioners an intuitive understanding of what “programming FHE for acceleration hardware” looks like in practice.

# About the speaker

Dr. Rotem Tsabary is a cryptographer and systems engineer, and the founder and CEO of Lattica. She holds a PhD in cryptography from the Weizmann Institute of Science and has prior experience utilizing large-scale ML infrastructure at Google. Her current work focuses on re-architecting Fully Homomorphic Encryption as a GPU-accelerated, tensorized compute workload suitable for deployment in real production systems.

# Register for the meetup

RSVP for the meetup [here](https://luma.com/FHE.org-085).

# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
