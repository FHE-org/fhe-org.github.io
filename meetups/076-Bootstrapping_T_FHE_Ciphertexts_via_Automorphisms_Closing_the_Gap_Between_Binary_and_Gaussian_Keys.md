<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2025/">Conference 2025</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

# Bootstrapping (T)FHE Ciphertexts via Automorphisms: Closing the Gap Between Binary and Gaussian Keys
#### by Olivier Bernard - 2025.07.03
#### <a href="https://lu.ma/5wo9zuow">Register for meetup</a> (Lu.ma) | <a href="https://github.com/user-attachments/files/21040837/fhe_slides.1.pdf">Slides</a> (Github) | <a href="https://eprint.iacr.org/2025/163">Paper</a> (eprint) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

<a href="https://lu.ma/5wo9zuow"><img width="900" alt="FHE org Meetup covers(3)" src="https://github.com/user-attachments/assets/d3fbd62c-3326-4d97-afcc-42845c5c69bf" /></a>

# Abstract

The GINX method in TFHE enables low-latency ciphertext bootstrapping with relatively small bootstrapping keys, but is limited to binary or ternary key distributions. In contrast, the AP method supports arbitrary key distributions, however at the cost of significantly large bootstrapping keys. Building on AP, automorphism-based methods (LMK⁺, EUROCRYPT 2023) achieve smaller keys, though each automorphism application necessitates a key switch, introducing computational overhead and noise.

This paper advances automorphism-based methods in two important ways. First, it proposes a novel traversal blind rotation algorithm that optimizes the number of key switches for a given key material. Second, it introduces a new external product that is automorphism-parametrized and seamlessly applies an automorphism to one of the input ciphertexts. Together, these techniques substantially reduce the number of key switches, resulting in faster bootstrapping and improved noise control. As an independent contribution, this paper also introduce a comprehensive theoretical framework for analyzing the expected number of automorphism key switches, whose predictions perfectly align with the results of extensive numerical experiments, demonstrating its practical relevance.

In a typical setting, by utilizing additional key material, the LLW⁺ approach (TCHES 2024) reduces key switches by 17% compared to LMK⁺. Our combined techniques achieve a 46% reduction using similar key material and can eliminate an arbitrary large number (e.g., > 99%) of key switches with only a moderate (9x) increase in key material size.

# About the speaker

Olivier Bernard is a cryptology researcher at Zama, whose research interests evolve around Post-Quantum Cryptography and Fully Homomorphic Encryption with a primary appetite for Cryptanalysis and Algorithmic Number Theory.

# Register for the meetup

RSVP for the meetup [here](https://lu.ma/5wo9zuow).

# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
