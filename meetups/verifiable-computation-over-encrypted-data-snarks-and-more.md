# Verifiable Computation over Encrypted Data: SNARKs and more
#### by Anca Nitulescu - 29.03.2022

#### <a href="https://www.youtube.com/watch?v=m0TlhZc0BwM">Video recording</a> (Youtube) | <a href="https://drive.google.com/file/d/1-FmKpWs9mspHTYdLPj39W1G67ZYlynhm/view">Slides</a> (Google Drive) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)
![Meetup event cover (2)](https://user-images.githubusercontent.com/5758427/185587761-08b7c02f-fda0-40fa-a67f-6db16c659210.jpg)


# Abstract
In this talk we will consider the setting in which an untrusted server stores a collection of encrypted data and is asked to compute a function over it and prove the result is correct. This problem is addressed by verifiable and private delegation of computation, a notion that is close to both the active areas of fully homomorphic encryption and verifiable computation.

The key tool to obtain such privacy-preserving verifiable computation protocols is to build Succinct non-interactive arguments of knowledge (SNARKs) that can efficiently handle proofs of computations over a quotient polynomial ring, such as the one used by Ring-LWE fully homomorphic encryption schemes.

This talk will present Rinocchio, a new designated-verifiable SNARK for ring arithmetic that allows to verify evaluations of FHE ciphertexts. We will discuss the challenges and open problems in the area.

# The speaker
Anca Nitulescu is a Cryptography Researcher at Protocol Labs working mainly on topics for the security of decentralised systems. Anca's current main areas of interest are SNARK protocols and Vector Commitments, focusing on scalability for such protocols when applied to distributed storage.

Anca worked on topics such as post-quantum secure SNARKs based on lattices, verifiable computation over encrypted data and authentication primitives, as well as on writing outreach material about Zero-Knowledge SNARKs. Website: www.di.ens.fr/~nitulesc

# Important links
- <a href="https://discord.fhe.org">Join the community on Discord</a>
- <a href="https://fheorg.substack.com">Subscribe to the FHE.org newsletter</a>
- <a href="https://twitter.com/fhe_org">Follow us on Twitter</a>

