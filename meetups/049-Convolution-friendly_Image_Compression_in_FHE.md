<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2024/">Conference 2024</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->


# Convolution-friendly Image Compression in FHE
#### by Sergi Rovira and Axel Mertens - 2024.04.25
#### <a href="https://www.youtube.com/watch?v=yV51Bprtol0&list=PLnbmMskCVh1chnSM8Jjy6Nk3IH6fpn7MM&index=1">Video</a> (Youtube) | <a href="https://github.com/FHE-org/fhe-org.github.io/files/15128279/presentation_fheorg.pdf">Slides</a> (Github) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

![049 Meetup cover](https://github.com/FHE-org/fhe-org.github.io/assets/37557436/63b8407e-1d87-4fd7-97ab-ff6e46569fb5)


# Abstract

In this talk, we will detail a practical FHE-friendly image compression and processing pipeline where an image can be compressed and encrypted on the client-side, sent to a server which decompresses it homomorphically and then performs image processing in the encrypted domain before returning the encrypted result to the client.

Inspired by JPEG, our pipeline also relies on discrete cosine transforms and quantization to simplify the representation of an image in the frequency domain, making it possible to effectively use a compression algorithm.

This pipeline is designed to be compatible with existing image-processing techniques in FHE, such as pixel-wise processing and convolutional filters. Using this technique, a high-definition (1024 x 1024) image can be homomorphically decompressed, processed with a convolutional filter and re-compressed in under 24.7s, while using ~8GB memory.


# About the speakers

Sergi Rovira is a PhD candidate in cryptography at Universitat Pompeu Fabra (UPF) under the supervision of Vanesa Daza (UPF) and Paz Morillo (UPC). His research is focused on fully homomorphic encryption and lattice based post-quantum cryptography. Previously, he received a MSc in Advanced Mathematics and two BSc degrees, in Computer Science and in Mathematics from Universitat de Barcelona (UB).

Axel Mertens is a PhD student in cryptography at COSIC, KU Leuven, under supervision of Nigel Smart. His areas of study include secure multiparty computation, fully homomorphic encryption and zero-knowledge proofs. Previously, he achieved a master's degree in Electrical engineering at KU Leuven.

# Register for the meetup

RSVP for the meetup at <a href="https://www.meetup.com/fhe-org/events/300373074/">https://www.meetup.com/fhe-org/events/300373074/</a>.

# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
