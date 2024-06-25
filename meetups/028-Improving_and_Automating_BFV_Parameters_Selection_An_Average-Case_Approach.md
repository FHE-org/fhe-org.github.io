<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2024/">Conference 2024</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

# Improving and Automating BFV Parameters Selection: An Average-Case Approach
#### by Beatrice Biasioli - 2023.06.20
#### <a href="https://www.youtube.com/watch?v=D9ua1eH4pUw&list=PLnbmMskCVh1chnSM8Jjy6Nk3IH6fpn7MM&index=1&t=12s">Video recording</a> (Youtube) | <a href="https://github.com/FHE-org/fhe-org.github.io/files/11818728/028.Improving.and.Automating.BFV.Parameters.pdf">Slides</a> (Github) | <a href="https://eprint.iacr.org/2023/600">Paper</a> (iacr) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

![028 Meetup cover](https://github.com/FHE-org/fhe-org.github.io/assets/37557436/1fa3e21f-8c25-4295-b8e7-ee1f7fde75c2)

# Abstract

State-of-the-art schemes in Fully Homomorphic Encryption, like the Brakerski/Fan-Vercauteren (BFV) one base their security on the Ring Learning with Errors assumption. The problem arising from this construction is the presence of a noise, growing as homomorphic operations are performed. For correctness, this error must be kept under a certain threshold, which yields to a lower bound on the ciphertext modulus. On the contrary, to guarantee security and efficiency, the same element is required to small. This trade-off makes the parameter selection a challenging task.

In line with the community efforts, our work aims at making FHE more practical and accessible, in order to have privacy-preserving data processing in real life. We propose the first average-case approach for the study of the noise in FV, improving substantially the state-of-the-art estimation. From it, we give closed formulas for the computation of the ciphertext modulus, in the most common circuits. Finally, we propose a user-friendly tool to automate the parameter selection, combining our results about correctness with the security known ones, generating ready-to-use code snippets.

# About the speaker

Beatrice Biasioli is a junior researcher at the Cryptography Research Centre at the Technology Innovation Institute, Abu Dhabi (UAE). In 2022, she did an internship in the same company, yielding to her master thesis “Study of the error in the Fully Homomorphic Encryption scheme FV”. She graduated in Mathematics, curriculum Cryptography, at the University of Trento (Italy) in 2022.
 
# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
