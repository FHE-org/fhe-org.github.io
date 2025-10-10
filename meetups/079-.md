<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2026/">Conference 2026</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

# Encrypted Matrix Multiplication Using 3-Dimensional Rotations
#### by Shane Kosieradzki and Hannah Mahon - 2025.10.23
#### <a href="https://luma.com/FHE.org-079">Register for meetup</a> (Lu.ma) | <a href="https://eprint.iacr.org/2025/1367">Paper</a> (eprint) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

<a href="https://luma.com/FHE.org-079"><img width="900" alt="Meetup 079" src="https://github.com/user-attachments/assets/84890d08-07a5-43ae-a738-02af4babc458" /></a>

# Abstract

Fully homomorphic encryption (FHE) enables computations over encrypted data without the need for decryption. Recently there has been an increased interest in developing FHE based algorithms to facilitate encrypted matrix multiplication (EMM) due to rising data security concerns surrounding cyber-physical systems, sensor processing, blockchain, and machine learning. Presently, FHE operations have a high computational overhead, resulting in an increased need for low operational complexity algorithms to compensate. We present a novel matrix encoding and EMM algorithm for power-of-2 cyclotomic based rings, utilizing three-dimensional rotations which offer improvements over the one-dimensional rotations used in previous work. We encode each $d \times d$ matrix as a single, batch-encoded, ciphertext, with minimum ciphertext size $d^3$. The proposed algorithm improves the number of plaintext-ciphertext multiplications from $O(d)$ to $O(1)$ and the number of rotations from $O(d)$ to $O(\log_2 (d)$. In addition, our work supports rectangular matrix multiplication and matrix packing without incurring additional operations per execution. Benchmarks were obtained with a Microsoft SEAL implementation and compared against leading EMM algorithm, with our work performing $4$ times faster for $16 \times 16$ matrices on consumer hardware. Our algorithm is compatible with existing encrypted machine learning frameworks and can be a drop-in replacement for existing matrix multiplication algorithms for increased speed. The favorable time complexity is well suited for time sensitive encrypted algorithms such as computer vision, controls, and patient health monitoring.

# About the speakers

Shane Kosieradzki is a Cryptographic Engineer at Crypto Asset Technology Labs, specializing in the development of Fully Homomorphic Encryption technology. In his current role he is working to develop next generation crypto-currency tools to empower law enforcement and government agencies to tackle the rising threat posed by digital assets.

Hannah Mahon is a Research Scientist at the Georgia Tech Research Institute. Her research interests include algebraic geometry, fully homomorphic encryption, and formal verification of software and hardware.

# Register for the meetup

RSVP for the meetup [here](https://luma.com/FHE.org-079).

# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
