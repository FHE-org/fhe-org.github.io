<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2025/">Conference 2025</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

#  Practical TFHE Ciphertext Sanitization for Oblivious Circuit Evaluation
#### by Intak Hwang - 2025.05.22
#### <a href="">Register for meetup</a> (lu.ma) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

![FHE org Meetup 072 cover](https://github.com/user-attachments/assets/890af489-6322-48f7-aa60-cb52c1e162d6)

# Abstract

A widespread application of Homomorphic Encryption (HE) is oblivious circuit evaluation, where a sender evaluates its private circuit on a receiver’s encrypted data. This setting includes important use cases such as oblivious inference and oblivious PRF protocols. However, while the security of HE guarantees the receiver’s privacy against the sender, it does not, by itself, ensure the privacy of the sender’s circuit.

This issue is known as circuit privacy, and one effective solution in the context of the TFHE scheme is ciphertext sanitization, an algorithm that removes all information contained in a ciphertext except for its plaintext. Since its initial introduction by Ducas and Stehlé (Eurocrypt 2016), several approaches have been proposed for constructing sanitization algorithms for TFHE, but they remain highly impractical.

In this work, we present a novel sanitization algorithm for the TFHE scheme that is practically deployable. Unlike prior methods that introduce randomization throughout the entire bootstrapping procedure or require repeated bootstrappings, our approach applies only two lightweight randomization steps at the input and output of the original TFHE bootstrapping, without modifying its core operations. As a result, our algorithm achieves sanitization with a single bootstrapping and minimal randomization, fully leveraging the high performance of TFHE bootstrapping.

In addition, we design a zero-knowledge argument of knowledge (ZKAoK) for TFHE public keys to address malicious receivers. To the best of our knowledge, this work is the first to construct a concrete ZKAoK that proves the well-formedness of public keys for TFHE, enabling a secure TFHE-based protocol against a malicious receiver.

# About the speaker

Intak Hwang is a Ph.D. student at Seoul National University. His research interests include, but are not limited to, Fully Homomorphic Encryption and Zero-Knowledge Proofs.

# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
