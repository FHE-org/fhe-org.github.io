<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2025/">Conference 2025</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

#  Oblivious Message Retrieval
#### by Zeyu Liu - 2025.06.12
#### <a href="https://youtu.be/rAU5m8RtrxI">Presentation recording</a> (Youtube) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

<a href="https://lu.ma/w6qnv4zz"><img width="900" alt="074 Meetup cover" src="https://github.com/user-attachments/assets/1af775be-54dc-4f87-9623-47ce29cecfdc" /></a>

# Abstract

Anonymous message delivery systems, such as private messaging services and privacy-preserving blockchains, need a mechanism for recipients to retrieve the messages addressed to them, without leaking metadata or letting their messages be linked. Recipients could download all posted messages and scan for those addressed to them, but communication and computation costs are excessive at scale.

We show how untrusted servers can detect messages on behalf of recipients, and summarize these into a compact encrypted digest that recipients can easily decrypt. These servers operate obliviously and do not learn anything about which messages are addressed to which recipients. Privacy, soundness, and completeness hold even if everyone but the recipient is adversarial and colluding. The primitive served for this purpose is called Oblivious Message Retrieval (OMR).

Furthermore, the model and constructions generalize to the setting of group messaging or mailing lists: senders can generate messages that would be efficiently detected by multiple recipients of their choice. This extended primitive is call Group OMR.

Our starting point of OMR is an asymptotically-efficient approach, using Fully Homomorphic Encryption and homomorphically-encoded Sparse Random Linear Codes. We then address the concrete performance using bespoke tailoring of lattice-based cryptographic components, alongside various algebraic and algorithmic optimizations. This reduces the digest size to a few bits per message scanned. Concretely, the servers’ cost is ~$0.1 per million messages scanned, and the resulting digests can be decoded by recipients in <20ms. Our schemes can thus practically attain the strongest form of receiver privacy for current applications such as privacy-preserving cryptocurrencies.

We also consider the case of group messaging, where each message may have multiple recipients (e.g., in a group chat or blockchain transaction). We devise new protocols where the servers' cost grows very slowly with the group size, while recipients' cost is low and independent of the group size.

# About the speaker

Zeyu Liu is a PhD student at Yale University, advised by Ben Fisch. He obtained his MS from Columbia University, advised by Tal Malkin and Eran Tromer. His main research focus is on lattice-based cryptography (including lattice-based fully homomorphic encryption and its applications) and blockchain-related protocols.

# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
