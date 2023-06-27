<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources"><b>Resources</b></a> | <a href="https://fhe-org.github.io/conferences/conference-2023/home">Conference 2023</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

<!-- Resource categories links -->
<p align="center">
  <a href="https://fhe-org.github.io/resources">Resources</a>
  —
  <a href="https://fhe-org.github.io/meetups">FHE.org meetups</a>
  —
  <a href="https://fhe-org.github.io/resources/libraries">Libraries</a>
  —
  <a href="https://fhe-org.github.io/resources/use-cases">Use cases</a>
  —
  <a href="https://fhe-org.github.io/resources/papers">Papers</a>
  —
  <a href="https://fhe-org.github.io/resources/schemes">Schemes</a>
  —
  <a href="https://fhe-org.github.io/resources/learn"><b>Learner Track</b></a>
</p>
<hr/>
<!-- /Resource categories links -->



<br>
<br>


<table align=center>
<tr>
<td><a href="https://github.com/FHE-org/fhe-org.github.io/blob/carrotcypher-patch-1/resources/learn/developer/constraints.md">ᐊ Constraints</a></td>
<td>Learner Track: Developer - Schemes and Libraries</td>
<td><a href="https://github.com/FHE-org/fhe-org.github.io/blob/carrotcypher-patch-1/resources/learn/developer/get-started-coding.md">Start Coding ᐅ</a></td>
</tr>
</table>


<br>



# Learner Track: Developer [<img src="https://img.shields.io/badge/Edit%20this%20page%20on-Github-lightgrey?style=flat-square">](https://github.com/FHE-org/fhe-org.github.io/blob/main/resources/learm/developer/readme.md)
<sub>This learner track assumes you are a developer wanting to learn about FHE. To see other available Learner Tracks, [click here](https://github.com/FHE-org/fhe-org.github.io/blob/carrotcypher-patch-1/resources/learn/readme.md).</sub>
<br>

# Schemes and Libraries





## Schemes
<table>
<tr>
<td colspan=2>

Schemes are the mathematical algorithms that are used for the underlying FHE operations on data. There are several major schemes implemented in modern libraries, each taking a different approach that has their own benefits and drawbacks on what types of operations can be done, the depth of calculations, and the resulting latency.

</td>
</tr>

<tr>
<td colspan=2>

- [BFV](https://eprint.iacr.org/2012/144) by **Fan Junfeng; Vercauteren Frederik**
- [BGV](https://eprint.iacr.org/2011/277) by **Z. Brakerski; C. Gentry, V. Vaikuntanathan**
- [CKKS](https://link.springer.com/chapter/10.1007/978-3-319-70694-8_15) by **Cheon Jung Hee; Kim Andrey; Kim Miran; Song Yongsoo**
- [FHEW](https://github.com/lducas/FHEW) by **Leo Ducas; Daniele Micciancio**
- [TFHE](https://tfhe.github.io/tfhe/) by **Ilaria Chillotti; Nicolas Gama; Mariya Georgieva; Malika Izabachene**

</td>
</tr>

</table>

<br>

## Libraries

<table>
<tr>
<td colspan=2>

Libraries are the software developers use to perform FHE operations easily, similarly to how one might use the `libsodium` library for basic cryptographic operations. Each library is designed for working with different schemes, some with multiple schemes and the ability to switch between them as needed. 

</td>
</tr>

<tr>
<td colspan=2>

- [Concrete](https://github.com/zama-ai/concrete) - Rust FHE library that implements Zama's variant of TFHE by **Zama**
- [Concrete ML](https://github.com/zama-ai/concrete-ml) - Privacy Preserving ML framework built on top of Concrete by **Zama**
- [HEaaN](https://heaan.it/) - C++ FHE library implementing CKKS scheme that supports bootstrapping and GPU-acceleration by **Crypto Lab**
- [HElib](https://github.com/HomEnc/HElib) - BGV scheme with bootstrapping and the Approximate Number CKKS scheme by **IBM**
- [Lattigo](https://github.com/ldsec/lattigo) - Lattice-based multiparty homomorphic encryption library in Go by **Tune Insight**
- [OpenFHE](https://github.com/openfheorg/openfhe-development) - Production-ready implementations of all major FHE schemes by **Duality Tech**
- [SEAL](https://github.com/microsoft/SEAL) - C++ FHE library implementing BFV and CKKS schemes by **Microsoft**
- [TFHE-rs](https://github.com/zama-ai/tfhe-rs/) - A pure Rust implementation of TFHE for booleans and small integer arithmetics over encrypted data by **Zama**


</td>
</tr>

</table>

<br>


## Choosing the right scheme/library

Choosing which library/scheme is right for you can be confusing at first, but here are some considerations that help in the decision making process:

* What data types will you working with? (Large integers? Small integers / Booleans? Real / Complex values?)
* How parralelizable is your workflow?
* How deep are your typical calculations?
* What performance requirements do you have?
* How easy do you need implementation to be?
* How much existing code / support will you need?

<i>In the following section, you'll have a chance to use existing sample code and write your own code. If at that point you're still unsure which library is right for you or have deeper questions about it the libraries and schemes, consider joining the [FHE.org community on Discord](https://discord.fhe.org) and asking the community directly. We're here to help!</i>




<br>
<br>



<table align=center>
<tr>
<td><a href="https://github.com/FHE-org/fhe-org.github.io/blob/carrotcypher-patch-1/resources/learn/developer/constraints.md">ᐊ Constraints</a></td>
<td>Learner Track: Developer - Schemes and Libraries</td>
<td><a href="https://github.com/FHE-org/fhe-org.github.io/blob/carrotcypher-patch-1/resources/learn/developer/get-started-coding.md">Start Coding ᐅ</a></td>
</tr>
</table>

<br>
<br>



<!--- Footer --->
<hr/>
💙 This website is a resource provided and contributed by the FHE.org community and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>. We welcome any contributions to this website! Read the <a href="https://fhe-org.github.io/contrib">contribution guidelines</a> first and simply open a PR on the <a href="https://github.com/fhe-org/fhe-org">Github repo</a> to add your resources.
