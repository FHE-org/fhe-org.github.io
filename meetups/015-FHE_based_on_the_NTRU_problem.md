<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2024/">Conference 2024</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

# FHE based on the NTRU problem: challenges and new constructions
#### by Hilder Hilder Vitor Lima Pereira - 27.09.2022
#### <a href="https://www.youtube.com/watch?v=6-SXi6VSxck">Video recording</a> (Youtube) | <a href="https://drive.google.com/file/d/1m4TUL5zT15gbrSlRWL4GP0FfjeJ6IqzM/view?usp=sharing">Slides</a> (Google Drive) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

![015 Meetup cover](https://github.com/FHE-org/fhe-org.github.io/assets/37557436/b05bd043-7c16-40be-b50f-12b122c4023c)

# Abstract
Soon after the first FHE constructions were proposed, it was noticed that it was possible to construct FHE on top of the NTRU problem. In some sense, NTRU is more efficient than the ring learning with errors problem (RLWE) because it allows us to encrypt a message into one single ring element, while RLWE requires two ring elements. Indeed, some early constructions, from 2012, were based on NTRU and were more efficient than their counterparts based on RLWE. In spite of that, when you think of an FHE scheme, the name that comes to your mind is probably BGV, or CKKS, or TFHE. All these schemes are based on RLWE.

So, what happened to the NTRU-based FHE schemes?

In this presentation, we will discuss about possible advantages and challenges of constructing FHE over NTRU, about the problems that the previous NTRU-based schemes had, and finally, we will show how the new scheme called FINAL combines LWE with NTRU to obtain a bootstrapping that is faster than TFHE's bootstrapping and uses shorter keys.

# The speaker
Hilder Vitor Lima Pereira is a postdoctoral researcher at COSIC, KU Leuven, working mainly with fully homomorphic encryption (FHE), from theory to practice. On the theoretical side, he has proposed new homomorphic schemes and has studied how different hardness assumptions can be used to construct FHE. For example, he proposed the first FHE scheme based on the approximate-GCD problem (aka FHE over the integers) with bootstrapping running in less than one second. On the practical side, he has been involved in implementing FHE schemes, in designing hardware accelerators for FHE and in applying FHE to practical problems, such as queries on encrypted databases and machine learning over encrypted data.

# Important links
- <a href="https://discord.fhe.org">Join the community on Discord</a>
- <a href="https://fheorg.substack.com">Subscribe to the FHE.org newsletter</a>
- <a href="https://twitter.com/fhe_org">Follow us on Twitter</a>
