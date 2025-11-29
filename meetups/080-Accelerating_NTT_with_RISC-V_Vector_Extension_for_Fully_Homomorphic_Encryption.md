<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2026/">Conference 2026</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

# Accelerating NTT with RISC-V Vector Extension for Fully Homomorphic Encryption
#### by Alexandre Rodrigues - 2025.11.06
#### <a href="https://www.youtube.com/watch?v=aYA0To-3pAU&list=PLnbmMskCVh1chnSM8Jjy6Nk3IH6fpn7MM&index=1">Presentation Recording</a> (Youtube) | <a href="https://www.youtube.com/watch?v=cPrALysu-1A&list=PLnbmMskCVh1e3EGYBGrAg1q-cVE5fM6O4&index=1">Speaker Interview</a> (Youtube) | <a href="https://tches.iacr.org/index.php/TCHES/article/view/12426">Paper</a> (tches) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

<a href="https://luma.com/FHE.org-080"><img width="900" alt="Meetup 080" src="https://github.com/user-attachments/assets/d6d6f690-593d-40d5-9a99-cecbd41592b6" /></a>

# Abstract

We target the optimization of FHE by leveraging vectorized implementations in RISC-V processors, using the RISC-V Vector (RVV) Extension. In particular, we accelerate the Number Theoretic Transform (NTT) and the Inverse-NTT (INTT), integrating our implementations in OpenFHE.

The specific contributions of our paper are:

1) A systematic analysis of the performance and memory access patterns of four widely used NTT/INTT algorithms, namely Cooley-Tukey/Gentelman-Sande and Korn-Lambiotte/Pease;

2) RVV-optimized implementations of these algorithms, including modular arithmetic routines and tailored butterfly structures and root-of-unity accesses;

3) The integration of our vectorized implementations into the OpenFHE library;

4) A comprehensive performance evaluation using two distinct computational platforms - a Vector Processing Unit (VPU) running on an FPGA and an out-of-order core simulated in gem5.

Our results show that the Korn-Lambiotte/Pease implementations outperform Cooley-Tukey/Gentelman-Sande, which are commonly used by state-of-the-art libraries (e.g. Intel HEXL). Our approach achieves significant speedups in both NTT benchmarks and complete FHE applications.

# About the speaker

Alexandre Rodrigues is currently pursuing a PhD in Computing from Instituto Superior Técnico's doctoral programme in Electrical and Computer Engineering.

His research interests include performance modelling, microarchitectural design and RISC-V.

# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
