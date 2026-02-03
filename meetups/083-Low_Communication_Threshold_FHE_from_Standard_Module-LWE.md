<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2026/">Conference 2026</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

# Low Communication Threshold FHE from Standard (Module-)LWE
#### by Hiroki Okada - 2026.02.05
#### <a href="https://luma.com/FHE.org-083">Register for meetup</a> (Lu.ma) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

<a href="https://luma.com/FHE.org-083"><img width="900" alt="Meetup 083" src="https://github.com/user-attachments/assets/f787251c-f478-4c5a-921b-4a1c40e9f78e" /></a>

# Abstract

Threshold fully homomorphic encryption (ThFHE) is a multi-party extension of FHE; any subset of at least T out of N parties can decrypt the ciphertexts by combining their decryption shares. Recently, Passelègue and Stehlé (Asiacrypt 2024) presented a ThFHE scheme with polynomially short decryption shares from the “known-norm” variant of learning with errors (LWE) assumption, in which the norm of the secret key is leaked to the adversary. While known-norm LWE is reduced from standard LWE, its module extension, known-covariance module-LWE (MLWE), lacks a known reduction from standard MLWE. Hence, extending their ThFHE scheme to the MLWE-based construction remains an open question.

​In this paper, we address this open problem: We construct a ThFHE scheme with polynomially small decryption shares from standard LWE/MLWE. Our core technique, which we call noise padding, eliminates the need of known-norm variants of LWE. We distribute shares of a padding noise and use them to adjust the distribution of decryption noise so that no information about the secret key is leaked. Furthermore, our ThFHE efficiently realizes arbitrary T-out-of-N threshold decryption via simple Shamir secret sharing instead of {0,1}-linear secret sharing. Hence, the sizes of the keys, ciphertexts and decryption shares in our scheme are compact: they are O(1) w.r.t. the number of parties N.

# About the speaker

Hiroki Okada is a researcher at KDDI Research.

​His research interests include lattice-based cryptography and especially FHE.

# Register for the meetup

RSVP for the meetup [here](https://luma.com/FHE.org-083).

# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
