<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2024/">Conference 2024</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->


# Towards Practical Transciphering for FHE with Setup Independent of the Plaintext Space
#### by Jeongeun Park - 2024.02.08
#### <a href="https://www.youtube.com/watch?v=1ZqWlbje978&list=PLnbmMskCVh1chnSM8Jjy6Nk3IH6fpn7MM&index=1">Video recording</a> (Youtube) | <a href="https://github.com/FHE-org/fhe-org.github.io/files/14216610/FHE.meetup_Jeongeun.pdf">Slides</a> (Github) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

![044 Meetup cover](https://github.com/FHE-org/fhe-org.github.io/assets/37557436/c334e252-dfa4-4eaf-80ed-903950bc74bf)


# Abstract

Fully Homomorphic Encryption (FHE) is a powerful tool to achieve non-interactive privacy preserving protocols with optimal computation/communication complexity. However, the main disadvantage is that the actual communication cost (bandwidth) is high due to the large size of FHE ciphertexts. As a solution, a technique called transciphering (also known as Hybrid Homomorphic Encryption) was introduced to achieve almost optimal bandwidth for such protocols. However, all of existing works require clients to fix a precision for the messages or a mathematical structure for the message space beforehand. It results in unwanted constraints on the plaintext size or underlying structure of FHE based applications.

This talk introduces a new approach for transciphering which does not require fixed message precision decided by the client, for the first time. In more detail, a client uses any kind of FHE-friendly symmetric cipher for {0,1} to send its input data encrypted bit-by-bit, then the server can choose a precision p depending on the application and homomorphically transforms the encrypted bits into FHE ciphertexts encrypting integers in Z_p. This talk shows an efficient evaluation of the new technique using FiLIP cipher and adapt the most practical homomorphic evaluation technique [CCS'22] to keep the practical latency. The practical running time as a proof-of-concept implementation will be also given at the end of this talk.

# About the speaker

Jeongeun Park is a cryptographer, mainly studying FHE and its applications, currently working at COSIC, KU Leuven as a postdoctoral researcher.

She has developed existing FHE schemes to handle multiple users securely and efficiently, which allows FHE to be realized in more general application scenarios.

She also has designed efficient privacy preserving protocols such as PIR, machine learning algorithms as applications of FHE.

# Register to attend

Visit FHE.org's [meetup.com](https://www.meetup.com/fhe-org/events/298732824/) event page to attend.

After the event has finished, resources *(including any slides, video, papers, etc)* will be added to this resource page.

# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
