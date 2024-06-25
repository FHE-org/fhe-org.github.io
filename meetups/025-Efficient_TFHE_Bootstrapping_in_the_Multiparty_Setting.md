<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2024/">Conference 2024</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

# Efficient TFHE Bootstrapping in the Multiparty Setting
#### by Sergi Rovira - 2023.06.01
#### <a href="https://www.youtube.com/watch?v=qwrRQmZRgwE&list=PLnbmMskCVh1chnSM8Jjy6Nk3IH6fpn7MM&index=1">Video recording</a> (Youtube) | <a href="https://github.com/FHE-org/fhe-org.github.io/files/11625925/025-Efficient_TFHE_Bootstrapping_in_the_Multiparty_Setting-slides.pdf">Slides</a> (Github) | <a href="https://fhe.org/conferences/conference-2023/media/Poster_Multiparty_TFHE.pdf">Poster</a> (Github) | <a href="https://eprint.iacr.org/2023/759">Paper</a> (iacr) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

![025 Meetup cover](https://github.com/FHE-org/fhe-org.github.io/assets/37557436/4c10b39b-9d38-4cf4-8abb-089448079dfc)

# Abstract

Many privacy preserving protocols are efficiently designed in a non-interactive way with practical implementation results thanks to recent improvements on FHE. However, some problems arise if we want to handle multiple users and also guarantee their input privacy.

If numerous users want to compute a common function keeping their input privacy, multi-key homomorphic encryption (MKHE) and multiparty homomorphic encryption (MPHE) (a.k.a. threshold-multikey FHE) are the best solutions for non-interactive protocols.

In this talk, we will explain the main differences between MKHE and MPHE, providing some example applications for both cases. We will then focus on how a MPHE scheme is constructed from an existing single-key FHE scheme. We will conclude by explaining a new technique (called homomorphic indicator) to construct an MPHE scheme from TFHE.

# About the speaker

Sergi Rovira is a fourth-year PhD candidate in cryptography at Universitat Pompeu Fabra (UPF) under the supervision of Vanesa Daza (UPF) and Paz Morillo (UPC). Their research is focused on fully homomorphic encryption and lattice based post-quantum cryptography. Previously, they received a MSc in Advanced Mathematics and two BSc degrees, in Computer Science and in Mathematics from Universitat de Barcelona (UB).

# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
