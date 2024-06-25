<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2024/">Conference 2024</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->


# A Fast Convolution Algorithm for Accelerating Private Model Inference
#### by Huan-Chih Wang - 2023.07.27
#### <a href="https://www.youtube.com/watch?v=pm496Bb-J3k&list=PLnbmMskCVh1chnSM8Jjy6Nk3IH6fpn7MM&index=1">Video recording</a> (Youtube) <!--| <a href="">Poster</a> (Github) |--> <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

![Meetup 032](https://github.com/FHE-org/fhe-org.github.io/assets/37557436/1cc889ab-9ee9-4253-a3a6-7481b8cad805)


# Abstract

The convolution layer is essential in Convolutional Neural Networks (CNNs); however, it is the main bottleneck during inference because many multiplications are involved. Besides, the burden of computations with encrypted data makes it even more difficult to build applications with CNN regarding privacy concerns. This work aims to accelerate the execution time of the convolutional layers in the encrypted domain. We derive an encryption-domain-friendly convolution algorithm by applying some tricks to reduce the multiplications required for an existing convolution algorithm.

The derived algorithm can process 8000+ images simultaneously, having the same result as the direct convolution algorithm. In other words, it does not affect model accuracy when applied to convolution-based inference tasks. We test the derived algorithm with the MNIST and CIFAR-10 datasets associated with plaintext and ciphertext model parameters. Experimental results justify that the proposed algorithm improves the inference performance, especially with ciphertext model parameters. Compared to the direct convolution algorithm, it saves 40% inference time with the MNIST dataset and nearly 60% with the CIFAR-10 dataset.

# About the speaker

Huan-Chih Wang received the B.S. and M.S. degrees in computer science and information engineering (CSIE) from National Cheng Kung University in 2015, and National Taiwan University in 2018, respectively. He is currently a Ph.D. candidate in CSIE at National Taiwan University. His research interests include machine learning and data security and privacy.

# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
