<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2024/">Conference 2024</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

# PARMESAN: Parallel ARithMEticS over ENcrypted data
#### by Jakub Klemsa - 2023.07.20
#### <a href="https://www.youtube.com/watch?v=A9tBfT6cQ-U&list=PLnbmMskCVh1chnSM8Jjy6Nk3IH6fpn7MM&index=1">Video recording</a> (Youtube) | <!--<a href="">Poster</a> (Github) |--> <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

![031 Meetup event](https://github.com/FHE-org/fhe-org.github.io/assets/37557436/444f1574-a6e9-4524-b913-1fc6bce957a9)

# Abstract

In this meetup, we present a bundle of methods for fast arithmetic operations over encrypted data: addition/subtraction, (scalar) multiplication, and some other operations or special cases. To achieve low evaluation times, we employ a particular non-standard integer representation, which enables parallel addition, upon which we construct other operations with a strong focus on their parallelization.

A particular interest goes for scalar multiplication (i.e., multiplication of an encrypted integer by an unencrypted one), for which we define a specific flavor of addition-subtraction chains (ASC*). Interestingly, our brute-forced optimal ASC*s for 12-bit integers require 20% less additions on average than the double-and-add method, and they might be re-used for other kinds of integer representations as well.

We conclude by presenting selected experimental results of our implementation—the PARMESAN Library—running on a 128-threaded super-computer node.

# About the speaker

Jakub Klemsa is about to finish his PhD at CTU in Prague, Czechia, and at the same time, he has just finished a one and a half year long research stay at EURECOM, France, under the supervision of Melek Önen. During his stay, he focused on the applicability of parallel addition algorithms and other arithmetic operations over TFHE-encrypted data, including TFHE parameter optimization, as well as he studied multi-key FHE.

# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
