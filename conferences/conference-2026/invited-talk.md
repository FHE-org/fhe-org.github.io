<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2026/"><b>Conference 2026</b></a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

<!-- Header conference 2026 links -->
<p align="center">
  <a href="https://fhe-org.github.io/conferences/conference-2026/">Home</a>
  —
  <a href="https://luma.com/fhe-org-conference-2026-tickets">Register</a>
  —
  <a href="https://fhe-org.github.io/conferences/conference-2026/program">Program</a>
  —
  <a href="https://fhe-org.github.io/conferences/conference-2026/call-for-presentations">Call for presentations</a>
  —
  <a href="https://fhe-org.github.io/conferences/conference-2026/committees">Committees</a>
  —
  <a href="https://fhe-org.github.io/conferences/conference-2026/submissions">Submissions</a>
  —
  <a href="https://fhe-org.github.io/conferences/conference-2026/contact">Contact</a>
  —
  <a href="https://fhe-org.github.io/conferences/conference-2026/sponsor">Sponsor</a>
  —
  Resources
</p>
<hr/>
<!-- /Header conference 2025 links -->

# To Search and Protect: An MPC/FHE Approach to Encrypted Search
#### by Shai Halevi - Invited Talk at FHE.org 2026

![Invited Speaker 2026](https://github.com/user-attachments/assets/a273b110-3133-466a-81b8-ed883d47564e)


# Abstract

Fully homomorphic encryption is often presented as enabling non-interactive secure computation, but in practice FHE is always a component within larger distributed systems. Even the simplest deployment requires an online trusted component with access to secret keys — 
if only to decrypt results. This talk examines this reality through the lens of encrypted search, where a customer-owned dataset is queried by many endpoints. What makes such a system more trustworthy than standard search where the server decrypts data directly? We 
explore a few possible answers and discuss their implications for the choice of technology for implementing this system.Technically, we focus on the task of encrypted k-Nearest Neighbor (kNN) similarity search, which decomposes naturally into two phases: a bilinear 
matrix-vector product computing similarities over large data, followed by complex post-processing over much smaller intermediate results. Our recent work on Encrypted Matrix-Vector Product (EMVP) provides a "poor man's FHE" that can serve as an ultra-efficient first stage. 
By using EMVP as a compression layer, it enables a hybrid approach where FHE could be used for the complex, lower-bandwidth second phase. We also discuss alternative post-processing via MPC with correlated randomness. Finally, we touch on other related points such as lexical 
search and ANN, and mention the new FHE Benchmarking Suite whose first workload targets exactly the kNN functionality.Based in part on a joint work with Benhamouda, Caicai Chen, Yuval Ishai, Hugo Krawczyk, Tamer Mour, Tal Rabin, and Alon Rosen.


# About the speaker

Shai Halevi is a Senior Principal Applied Scientist at AWS Cryptography. Before that, he was a research fellow in the Algorand Foundation (2019-2023), and a researcher in the Cryptography Research Group in IBM T.J. Watson Research Center (1997-2019). 
Shai received his PhD in Computer Science in 1997 from MIT, and a B.Sc. and M.Sc. in Computer Science (in 1991, 1993) from the Technion in Israel. His research area is cryptography, and in particular cryptographic protocols and the building blocks from which they are constructed. 
