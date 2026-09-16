<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2027/">Conference 2027</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

# FHE.org Software Day 2026
#### 2026.09.24, 1800-2100 CEST
#### <a href="https://luma.com/e3w9jklp">Register for Software Day</a> | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)
<a href="https://luma.com/e3w9jklp"><img width="900" alt="FHE.org Software Day 2026" src="https://github.com/user-attachments/assets/11b21e81-9264-409b-8d12-0a3fe08adb49" /></a>

# Description

🗓️ The FHE.org Software Day has been scheduled for Thursday, September 24th at 6pm CEST (Paris, FR).

The focus will be around topics in FHE Software.

The event will comprise four talks split into two sessions of two, and a separate panel session. Each talk will be 25 minutes, with a short time for questions. The panel session will be guided with some initial questions from the host, before moving to an audience-based question and answer session.

For more information and link to RSVP, see the event page on Luma: https://lu.ma/2skte98w


# Schedule

1800-2100 CEST

# Confirmed Speakers

### Kim Laine (Microsoft)

**Ten Years of SEAL: What I Learned from Building an FHE Library**

Microsoft SEAL was started more than a decade ago as my internship project at Microsoft Research. It propelled my career at Microsoft into an incredible journey of countless collaborators, rewarding research projects, endless engineering challenges, sweet successes, and deep disappointments. In this talk I will share some highlights from this journey and some of my most valuable learnings.

### Andreea Alexandru (Duality) and Shruthi Gorantala (Google)

**FHE Benchmarking Suite**

Homomorphic encryption has advanced quickly, but because measurement conditions differ from one result to the next, systematic, objective comparison of real progress has remained out of reach. The FHE Use Cases and Benchmarking effort of HomomorphicEncryption.org provides standardized, end-to-end workloads for measuring the cost of computing on encrypted data, enabling application developers to assess feasibility and implementers to compare solutions on equal footing across hardware platforms. The framework accommodates open-source, closed-source, and hardware-accelerated backends alike.

In this talk, we present the latest status of the benchmark suite and highlight newly integrated workloads. Drawing from initial submission rounds, we analyze insights on hardware acceleration, memory bottlenecks, and deployment trade-offs and discuss opportunities for community collaboration to shape the next generation of benchmarks.

### Guillaume Hanrot (CryptoLab)

**Sylph: Scaling CKKS Inference for Llama-3-8B** 

CKKS's design, which jointly offers high-throughput SIMD computation and real-number arithmetic, makes it especially well suited to privacy-preserving evaluation of AI primitives. Over the past decade, progress in CKKS algorithms and implementations has moved the target of encrypted inference from small neural networks to modern CNNs and, more recently, to LLMs with billions of parameters.

In this talk, we present Sylph, CryptoLab's end-to-end homomorphic implementation of Llama-3-8B, built on the HEaaN2 library. On eight NVIDIA RTX PRO 6000 GPUs, Sylph processes a fully encrypted 128-token
prompt in 20 seconds. This compares with a previously reported prefill time of 134 seconds on eight B200 GPUs for the same 128-token setting. Sylph also handles heterogeneous prompts, in which a long public context is followed by a short sensitive suffix. With 3968 public tokens and 128 encrypted tokens, prefill takes 64 seconds.

At the model level, Sylph uses sink-token prefixing and orthogonal rotations to mitigate activation outliers without retraining. At the cryptographic level, Sylph optimizes state-of-the-art homomorphic algorithms for linear algebra. For long contexts, a dedicated one-level plaintext-ciphertext matrix multiplication and a shallow
Softmax design keep the attention phase almost bootstrapping-free, which is key to its efficiency.


# Register for Software Day

RSVP for the event [here](https://luma.com/e3w9jklp).

# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
