<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2024/">Conference 2024</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->


# Revisiting Key Decomposition Techniques for FHE: Simpler, Faster and More Generic
#### by Nicolas Gama - 2023.09.28 
#### <a href="https://www.youtube.com/watch?v=xLrFVTLatTc&list=PLnbmMskCVh1chnSM8Jjy6Nk3IH6fpn7MM&index=1">Video recording</a> (Youtube) | <a href="https://eprint.iacr.org/2023/771.pdf">Paper</a> (eprint) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

![Meetup #035](https://github.com/FHE-org/fhe-org.github.io/assets/37557436/ff3e61ec-9d72-4e32-ace5-bc0d1b89fad7)

# Abstract

This presentation focuses on recent extensions of the Key decomposition techniques of [KLSS23], to a new bivariate representation which is much closer to the traditional base-2^k representations, but with more flexibility. This representation is easy to implement, and is surprisingly as efficient as CRT-based representations for external products, a fact we had not seen since the introduction of full-RNS approaches more than three years ago!

This work relies on the same DFT API as was proposed in [KLSS23], and brings the TFHE, BFV and CKKS spaces closer than ever, which has beneficial impact for scheme switching and compilation purposes. The common DFT backend API gives new leads for hardware developers to build FHE accelerators in large multiplicative depth, via not only NTT approaches, but via approximate FFT as well.

# About the speaker

Nicolas Gama is principal privacy software engineer at SandboxAQ. He started his career in the accademia, working on the security of lattice based cryptosystems, and on homomorphic encryption, with the team that created the first version of TFHE.

Since then, he has focused on developing tools and applications of privacy preserving computation, and concepts like Chimera or Manticore, that allow to bridge different FHE or MPC schemes, and provide fast arithmetic for a wide range of discrete and continuous computation models.

# Register to attend

After the event has finished, resources *(including any slides, video, papers, etc)* will be added to this resource page.

# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
