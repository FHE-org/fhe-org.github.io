<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2024/">Conference 2024</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

# Faster Amortized FHEW bootstrapping using Ring Automorphisms
#### by Duhyeong Kim and Gabrielle De Micheli - 28.02.2023
#### <a href="https://youtu.be/7wNXeLkHmuY">Video recording</a> (Youtube) | <a href="https://drive.google.com/file/d/1FHH3KvbzUwt3z6dvlbfDXPbql42Yxrjz/view?usp=sharing">Slides</a> (Google Drive) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

![021 Meetup cover](https://github.com/FHE-org/fhe-org.github.io/assets/37557436/6ff20390-06b7-4600-a4fe-a2d8bf107743)

# Abstract
Amortized bootstrapping offers a way to simultaneously refresh many ciphertexts of a fully homomorphic encryption scheme, at a total cost comparable to that of refreshing a single ciphertext. An amortization method for FHEW-style cryptosystems was first proposed by (Micciancio and Sorrell, ICALP 2018), who showed that the amortized cost of bootstrapping n FHEW-style ciphertexts can be reduced from basic cryptographic operations to just , for any constant . However, despite the promising asymptotic saving, the algorithm was rather impractical due to a large constant (exponential in ) hidden in the asymptotic notation. In this work, we propose an alternative amortized bootstrapping method with much smaller overhead, still achieving asymptotic amortized cost, but with a hidden constant that is only linear in , and with reduced noise growth. This is achieved following the general strategy of (Micciancio and Sorrell), but replacing their use of the Nussbaumer transform, with a much more practical Number Theoretic Transform, with multiplication by twiddle factors implemented using ring automorphisms. A key technical ingredient to do this is a new "scheme switching" technique proposed in this paper which may be of independent interest.

# The speakers
Duhyeong Kim is a research scientist in Privacy Technologies Research Group at Intel Labs. He completed his PhD in 2021 at Seoul National University advised by Prof. Jung Hee Cheon. His major research topics are homomorphic encryption and lattice-based cryptography, but he is broadly interested in all aspects of cryptography and mathematical problems derived from them.

Gabrielle De Micheli is a postdoctoral scholar at the University of California, San Diego, working with Prof. Daniele Micciancio. Prior to that, she completed her PhD at Inria, France, under the supervision of Pierrick Gaudry and Cécile Pierrot, for which she received a best thesis award, Prix de thèse Gilles Kahn, in 2021.

Her research focuses on the mathematical aspects of applied cryptography, with particular research interests for lattice-based cryptography, fully homomorphic encryption and computational number theory.
# Important links
- <a href="https://discord.fhe.org">Join the community on Discord</a>
- <a href="https://fheorg.substack.com">Subscribe to the FHE.org newsletter</a>
- <a href="https://twitter.com/fhe_org">Follow us on Twitter</a>
