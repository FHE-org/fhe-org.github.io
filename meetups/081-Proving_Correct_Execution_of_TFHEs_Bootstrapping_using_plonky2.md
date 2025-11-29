<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2026/">Conference 2026</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

# Proving Correct Execution of TFHE's Bootstrapping using plonky2
#### by Louis Tremblay Thibault - 2025.11.20
#### <a href="https://luma.com/FHE.org-081">Register for meetup</a> (Lu.ma) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

<a href="https://luma.com/FHE.org-081"><img width="900" alt="Meetup 081" src="https://github.com/user-attachments/assets/815c8ad0-41f0-4b0c-8b66-af781a56ae80" /></a>

# Abstract

In this work we demonstrate for the first time that a full FHE bootstrapping operation can be proven using a SNARK in practice. We do so by designing an arithmetic circuit for the bootstrapping operation and prove it using plonky2.

​We are able to prove the circuit on an AWS Hpc7a instance in under 20 minutes. Proof size is about 200kB and verification takes less than 10ms.

​As the basis of our bootstrapping operation we use TFHE's programmable bootstrapping and modify it in a few places to more efficiently represent it as an arithmetic circuit (while maintaining full functionality and security).

​In order to achieve our results in a memory-efficient way, we take advantage of the structure of the computation and plonky2's ability to efficiently prove its own verification circuit to implement a recursion-based IVC scheme.

# About the speaker

Louis Tremblay Thibault is a cryptography researcher at Zama and a PhD student at ÉTS Montréal. His research focuses on privacy-preserving verifiable computation.

# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
