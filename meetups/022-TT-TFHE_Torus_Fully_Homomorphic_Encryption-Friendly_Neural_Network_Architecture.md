<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources">Resources</a> | <a href="https://fhe-org.github.io/meetups/">Meetups</a> | <a href="https://fhe-org.github.io/conferences/conference-2024/">Conference 2024</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->


# TT-TFHE: Torus Fully Homomorphic Encryption-Friendly Neural Network Architecture
#### by Adrien Benamira - 2023.04.27
#### <a href="https://www.youtube.com/watch?v=_yvYHipEByI&list=PLnbmMskCVh1chnSM8Jjy6Nk3IH6fpn7MM&index=1">Video recording</a> (Youtube) | <a href="https://github.com/FHE-org/fhe-org.github.io/files/11420881/TT-TFHE_Torus_Fully_Homomorphic_Encryption-Friendly_Neural_Network_Architecture.md.pdf">Slides</a> (Github) | <a href="https://discord.fhe.org">Join the discussion</a> (Discord)

![022 Meetup cover](https://github.com/FHE-org/fhe-org.github.io/assets/37557436/4ca85514-29db-4f12-9c04-043b83bd6006)

# Abstract

In this talk, we will present a new framework called TT-TFHE that provides a deep neural network Fully Homomorphic Encryption (FHE) solution for tabular and image datasets. The framework uses a recent family of convolutional neural networks called Truth-Table Neural Networks (TTnet) to enable effective scaling of Torus FHE (TFHE) usage.

The proposed framework offers an easy-to-implement, automated TTnet-based design toolbox on top of a Python-based open-source implementation using the Concrete-Numpy library, which allows for efficient FHE inference over encrypted data.

The talk will include an experimental comparison of TT-TFHE with other FHE/HE schemes, such as BFV or CKKS, comparing performance metrics such as accuracy, time, memory usage, and communication bandwidth over various datasets, including tabular and image datasets such as MNIST and CIFAR10. By examining a real-world use case, we will demonstrate that TT-TFHE provides a practical solution for deploying machine learning models with FHE for tabular and small image datasets (MNIST and CIFAR10).

# About the speaker

Adrien Benamira is a final year Ph.D. candidate in Mathematics at Nanyang Technological University in Singapore, with a research focus on the intersection of AI and security under the supervision of Thomas Peyrin and Shivam Bhasin. He and Thomas & Shivam's team have led projects that applied deep learning to enhance security analysis in cryptography and side-channel attacks, resulting in publications in CHES and Eurocrypt.

Adrien holds a double master's degree in Applied Mathematics and Data Science from CentraleSupélec engineering school and was enrolled in Mathematics Vision and Learning (MVA) Master program from École Normale Supérieure Paris-Saclay University. Adrien has gained valuable industry experience through internships and technology projects, particularly during his time at Thales where he developed and patented a machine-learning method for detecting anomalies in time series. He is passionate about contributing to inspiring research and tackling some of the most challenging open questions in artificial intelligence and security, including the global exact interoperability of AI, data privacy of AI cloud deployment, formal complete/sound verification of AI, and cryptanalysis automation with AI.

# Never miss an update

The newsletter where we post community announcements: https://fheorg.substack.com/

The discord server where you can discuss FHE related topics with the community: https://discord.fhe.org

Make sure to join either (or both) of these to stay informed about future events!
