<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2025/">Conference 2025</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

# Relaxed Functional Bootstrapping: A New Perspective on BGV and BFV Bootstrapping
#### by Zeyu Liu - 2025.02.20
#### <a href="https://www.youtube.com/watch?v=LceWK6XxXqA&list=PLnbmMskCVh1chnSM8Jjy6Nk3IH6fpn7MM&index=1">Presentation recording</a> (Youtube) |  <a href="https://github.com/user-attachments/files/19092490/relaxed_bfv_boot.pptx">Slides</a> (Github) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

![067 Meetup](https://github.com/user-attachments/assets/8208a6a4-5c56-4ea6-9cad-d210a0b8cb2e)


# Abstract

BGV and BFV are among the most widely used fully homomorphic encryption (FHE) schemes, supporting evaluations over a finite field. To evaluate a circuit with arbitrary depth, bootstrapping is needed. However, despite the recent progress, bootstrapping of BGV/BFV still remains relatively impractical, compared to other FHE schemes.

​In this work, we inspect the BGV/BFV bootstrapping procedure from a different angle. We provide a generalized bootstrapping definition that relaxes the correctness requirement of regular bootstrapping, allowing constructions that support only certain kinds of circuits with arbitrary depth. In addition, our definition captures a form of functional bootstrapping. In other words, the output encrypts a function evaluation of the input instead of the input itself.

Under this new definition, we provide a bootstrapping procedure supporting different types of functions. Our construction is 1-2 orders of magnitude faster than the state-of-the-art BGV/BFV bootstrapping algorithms, depending on the evaluated function.

Of independent interest, we show that our technique can be used to improve the batched FHEW/TFHE bootstrapping construction introduced by Liu and Wang (Asiacrypt 2023). Our optimization provides a speed-up of 6x in latency and 3x in throughput for batched binary gate bootstrapping and a plaintext-space-dependent speed-up for batched functional bootstrapping with plaintext space smaller than Z_{512}.

# About the speaker

Zeyu Liu is a PhD student at Yale University, advised by Ben Fisch. He obtained his MS from Columbia University, advised by Tal Malkin and Eran Tromer. His main research focus is on lattice-based cryptography (including lattice-based fully homomorphic encryption and its applications) and blockchain-related protocols.


# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
