<!-- Main header navigation -->
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/5758427/180978488-db825482-5a58-4c7c-9589-c494a6f0be04.png"><br/>
  <a href="https://fhe-org.github.io">Home</a> | <a href="https://fhe-org.github.io/resources"><b>Resources</b></a> | <a href="https://fhe-org.github.io/use-cases">Use cases</a> | <a href="https://fhe-org.github.io/conferences/conference-2023/home">Conference 2023</a> | <a href="https://fhe-org.github.io/community">Join the community</a>
</p>
<hr/>
<!-- /Main header navigation -->

# FHE resources

A curated list of resources about Fully Homomorphic Encryption.

## FHE Libraries

<table id="sampleTableB" class="table table-striped sampleTable">
    <thead>
        <tr>
            <th data-sortas="case-sensitive">Name</th>
            <th data-sortas="case-sensitive">Description</th>
            <th data-sortas="case-sensitive">Author</th>
            <th data-sortas="case-sensitive">Stars</th>
        </tr>
    </thead>

<!--- Add more library resources here! --->

<tr>
    <td><a href="https://github.com/zama-ai/concrete">Concrete</a></td>
    <td>Rust FHE library that implements Zama's variant of TFHE.</td>
    <td><a href="https://github.com/zama-ai/">Zama</a></td>
    <td><img src="https://img.shields.io/github/stars/zama-ai/concrete?style=plastic"></td>
</tr>

<tr>
    <td><a href="https://github.com/HomEnc/HElib">HElib</a></td>
    <td>BGV scheme with bootstrapping and the Approximate Number CKKS scheme.</td>
    <td><a href="https://github.com/HomEnc/">HomEnc</a></td>
    <td><img src="https://img.shields.io/github/stars/HomEnc/HElib?style=plastic"></td>
</tr>

<tr>
    <td><a href="https://github.com/ldsec/lattigo">Lattigo</a></td>
    <td>lattice-based multiparty homomorphic encryption library in Go.</td>
    <td><a href="https://github.com/ldsec/">LDS</a></td>
    <td><img src="https://img.shields.io/github/stars/ldsec/lattigo?style=plastic"></td>
</tr>

<tr>
    <td><a href="https://github.com/openfheorg/openfhe-development">OpenFHE</a></td>
    <td>OpenFHE is an open-source FHE library that provides production-ready implementations of all major FHE schemes.</td>
    <td><a href="https://github.com/openfheorg/">OpenFHE.org</a></td>
    <td><img src="https://img.shields.io/github/stars/openfheorg/openfhe-development?style=plastic"></td>
</tr>

<tr>
    <td><a href="https://palisade-crypto.org/software-library/">Palisade</a></td>
    <td>C++ FHE library that supports all the major FHE protocols.</td>
    <td><a href="https://dualitytech.com/">Duality</a></td>
    <td>Unknown</td>
</tr>

<tr>
    <td><a href="https://github.com/microsoft/SEAL">SEAL</a></td>
    <td>C++ FHE library implementing BFV and CKKS schemes.</td>
    <td><a href="https://github.com/microsoft/">Microsoft</a></td>
    <td><img src="https://img.shields.io/github/stars/microsoft/SEAL?style=plastic"></td>
</tr>

<tr>
    <td><a href="https://heaan.it/">HEaaN</a></td>
    <td>C++ FHE library implementing CKKS scheme that supports bootstrapping and GPU-acceleration.</td>
    <td><a href="https://www.cryptolab.co.kr/">CryptoLab</a></td>
    <td>Unknown</td>
</tr>

</table>

## FHE Resources

<table id="sampleTableC" class="table table-striped sampleTable">
    <thead>
        <tr>
            <th data-sortas="case-sensitive">Date</th>
            <th data-sortas="case-sensitive">Title</th>
            <th data-sortas="case-sensitive">Description</th>
            <th data-sortas="case-sensitive">Author</th>
            <th data-sortas="case-sensitive">Tags</th>
        </tr>
    </thead>

<!--- Add more resources here! --->

<tr>
    <td>2022.08.18</td>
    <td><a href="https://www.zama.ai/post/the-game-of-life-rebooted-with-concrete-v0-2">Encrypted Conway's Game of Life in Rust with the Concrete library</a></td>
    <td>In July 2022, Zama announced the latest release of the Concrete Framework that aims at simplifying the use of Fully Homomorphic Encryption, or FHE, a powerful tool allowing users to compute over encrypted data. The goal of this blogpost is to see this new version of Concrete in action. We will upgrade an already existing example, Conway’s Game of life by Optalysys, using concrete-boolean so it can benefit from new features available in Concrete v0.2.</td>
    <td>Jean-Baptiste Orfila</td>
    <td>Tutorials</td>
</tr>


<tr>
    <td>2022.07.07</td>
    <td><a href="https://fhe-org.github.io/meetups/homomorphic-Large-Precision-Integers-Using-Concrete">Homomorphic Large Precision Integers Using Concrete</a></td>
    <td>In this talk, we will detail a few constructions of large integers based on the TFHE cryptosystem. We will also explore their theoretical aspects along with their implementations in the Concrete library.</td>
    <td>Jean-Baptiste Orfila</td>
    <td>Theory</td>
</tr>

<tr>
    <td>2022.06.02</td>
    <td><a href="https://www.zama.ai/post/tfhe-deep-dive-part-4">TFHE deep-dive - part 4 - Programmable Bootstrapping</a></td>
    <td>Now that we have all these ingredients, we are finally ready to build the most complex operation. We need three more additional building blocks -- the modulus switching, the sample extraction and the blind rotation -- and then we will be good to go. </td>
    <td>Ilaria Chillotti</td>
    <td>Theory</td>
</tr>

<tr>
    <td>2022.05.18</td>
    <td><a href="https://www.zama.ai/post/tfhe-deep-dive-part-3">TFHE deep-dive - part 3 - Key switching and leveled multiplications</a></td>
    <td>In this post, we will continue describing some more leveled homomorphic operations and building blocks. The goal is to create a solid basis to be able to understand bootstrapping in the next blog post.</td>
    <td>Ilaria Chillotti</td>
    <td>Theory</td>
</tr>

<tr>
    <td>2022.05.11</td>
    <td><a href="https://www.zama.ai/post/tfhe-deep-dive-part-2">TFHE deep-dive - part 2 - Encodings and linear leveled operations</a></td>
    <td>In this post we will start discovering how to perform operations on these ciphertexts. In particular, we will describe two simple homomorphic operations: homomorphic addition and multiplication by unencrypted constants.</td>
    <td>Ilaria Chillotti</td>
    <td>Theory</td>
</tr>

<tr>
    <td>2022.05.04</td>
    <td><a href="https://www.zama.ai/post/tfhe-deep-dive-part-1">TFHE deep-dive - part 1- Ciphertext types</a></td>
    <td>This blog post is part of a series of posts dedicated to the Fully Homomorphic Encryption scheme called TFHE (also known as CGGI, from the names of the authors Chillotti-Gama-Georgieva-Izabachène). Each post will allow you to go deeper into the understanding of the scheme. The subject is challenging, we know, but don’t worry, we will dive into it little by little.</td>
    <td>Ilaria Chillotti</td>
    <td>Theory</td>
</tr>

<tr>
    <td>2022.04.28</td>
    <td><a href="https://fhe-org.github.io/meetups/single-trace-side-channel-attack-on-seal-homomorphic-encryption-library">Single-Trace Side-Channel Attack on SEAL Homomorphic Encryption Library</a></td>
    <td>In this talk, Furkan will talk about the first side-channel attack on homomorphic encryption, which allows computing on encrypted data. The attack targets the Gaussian sampling in the SEAL’s encryption phase and can extract the entire secret message with a single power measurement.</td>
    <td>Furkan Aydin</td>
    <td>Engineering</td>
</tr>

<tr>
    <td>2022.03.29</td>
    <td><a href="https://fhe-org.github.io/meetups/verifiable-computation-over-encrypted-data-snarks-and-more">Verifiable Computation over Encrypted Data: SNARKs and more</a></td>
    <td>This talk will present Rinocchio, a new designated-verifiable SNARK for ring arithmetic that allows to verify evaluations of FHE ciphertexts. We will discuss the challenges and open problems in the area.</td>
    <td>Anca Nitulescu</td>
    <td>Theory</td>
</tr>

<tr>
    <td>2022.02.25</td>
    <td><a href="https://fhe-org.github.io/meetups/single-server-private-information-retrieval-using-homomorphic-encryption">Single-server private information retrieval using homomorphic encryption</a></td>
    <td>In this talk, Haris will talk about private information retrieval (PIR) protocols based on Somewhat/Fully Homomorphic Encryption (SHE/FHE). PIR allows the client to privately retrieve a record from a database hosted at the server. He will first discuss a general framework of PIR protocols. Followed by optimizations to improve the request size, computation time, and response overhead including the results from ACM CCS’21.</td>
    <td>Muhammad Haris</td>
    <td>Engineering</td>
</tr>


<tr>
    <td>2022.01.20</td>
    <td><a href="https://fhe-org.github.io/meetups/an-overview-of-hybrid-homomorphic-encryption">An overview of Hybrid Homomorphic Encryption</a></td>
    <td>Fully Homomorphic Encryption (FHE) has long been considered the crown jewel of cryptology and it is only recently that efficient solutions have started to emerge. Being as it is, the current state of the art of FHE still comes along with a huge expansion factor that implies an overload both in computation time and bandwidth usage. Hybrid Homomorphic Encryption, or transciphering, aims to solve the latter issue by combining the efficiency of light symmetric schemes with the computational power of FHE. In this talk, we will present an history of HHE, talk about the latest advances in the domain and address the issues that are yet to be solved.</td>
    <td>Orel Cosseron and Clément Hoffman</td>
    <td>Theory</td>
</tr>

<tr>
    <td>2022</td>
    <td><a href="https://courses.openmined.org/courses/foundations-of-private-computation">Foundations of Private Computation</a></td>
    <td>Become a data scientist and statistician capable of studying data you do not own and cannot see. Learn every major privacy-preserving technique to an intermediate level, understand how they work together, and how you can use them to safely study data owned by another organization (such as another university, enterprise, or government) without ever seeing the underlying data yourself.</td>
    <td>Open Mined</td>
    <td>Theory</td>
</tr>

<tr>
    <td>2021.12.22</td>
    <td><a href="https://www.zama.ai/post/data-governance-is-in-desperate-need-of-innovation">Data governance is in desperate need of innovation</a></td>
    <td>From a policy perspective, historically, from about the late seventies, the topic of data governance has been framed with a focus on concerns around privacy and data protection. It became a trade issue at the end of the nineties and since then there has been very little progress in multilateral fora in terms of finding a common vocabulary to discuss data governance more systemically, and to measure the value of data, both from an economic and social perspective.</td>
    <td>Jeremy Bradley and Lorrayne Porciuncula</td>
    <td>Non-technical</td>
</tr>

<tr>
    <td>2021.12.21</td>
    <td><a href="https://fhe-org.github.io/meetups/fhe-at-the-speed-of-light">FHE at the speed of light</a></td>
    <td>After a very brief introduction to the core operations of FHE and what makes them slow, we will provide a short review of the physical principles behind Fourier optics and a high-level explanation of how it can, in principle, eliminate the main bottleneck in FHE. We will then show how our technology leverages this theoretical potential to develop a practical solution in a time frame of a few years. Finally, we will present results from numerical experiments using a modified version of the Concrete library showing the speed-up this technology can provide in the next three years. We will also take this opportunity to show how easy Concrete, the Google FHE transpiler, and other libraries make it for companies outside the traditional cryptography community to work with FHE, another important point for future wide adoption.</td>
    <td>Florent Michel</td>
    <td>Engineering</td>
</tr>

<tr>
    <td>2021.12.01</td>
    <td><a href="https://www.zama.ai/post/homomorphic-encryption-101">Homomorphic Encryption 101</a></td>
    <td>Fully Homomorphic Encryption (FHE) has long been considered as the holy grail of cryptography. The concept was imagined in the late seventies, but the first realization only came three decades later. Today, both the public and private sectors are embracing this new security paradigm and are actively working at making FHE more practical and easier to use.</td>
    <td>Marc Joye</td>
    <td>Non-technical</td>
</tr>


<tr>
    <td>2021.11.23</td>
    <td><a href="https://fhe-org.github.io/meetups/why-we-need-revolutionary-hardware-for-fhe">Why we need revolutionnary hardware for FHE</a></td>
    <td>The need for revolutionary hardware to enable FHE applications was identified by DARPA in the context of the DPRIVE program. As part of the DPRIVE program execution, Intel and Microsoft are realizing a platform to make FHE technologies more accessible by developing revolutionary hardware and software stack. Furthermore, the team is committed to the development of international standards and best practices. Overall, the initiative can enable unprecedented, cost-effective FHE performance, and pave the path for industrial deployment.</td>
    <td>Rosario Cammarota</td>
    <td>Engineering</td>
</tr>


<tr>
    <td>2021.11.04</td>
    <td><a href="https://fhe-org.github.io/meetups/introduction-to-fhe">Introduction to homomorphic encryption</a></td>
    <td>In this video recording, Pascal Paillier from Zama gave an introduction to homomorphic encryption, including examples of application to machine learning.</td>
    <td>Pascal Paillier</td>
    <td>Theory</td>
</tr>

<tr>
    <td>2021.11.03</td>
    <td><a href="https://medium.com/optalysys/encrypted-search-using-fully-homomorphic-encryption-4431e987ba40">Encrypted search using Fully Homomorphic Encryption</a></td>
    <td>Information is the lifeblood of the modern internet. As of January 2021, 4.66 billion people were active internet users, each one sending and receiving a torrent of data. Quite of lot of this data is (relatively speaking) harmless and can be shared and accessed to various degrees. A vast and lucrative market around analysing this data has sprung up to take advantage of this highly accessible information, albeit with associated concerns about how this data is used.</td>
    <td>Florent Michel, Joseph Wilson and Edward Cottle</td>
    <td>Tutorials</td>
</tr>

<tr>
    <td>2021.10.18</td>
    <td><a href="https://ia.cr/2021/1402">Guide to Fully Homomorphic Encryption over the discretized torus</a></td>
    <td>This guide is intended to practitioners. It explains the inner-workings of TFHE, a torus-based fully homomorphic encryption scheme. More exactly, it describes its implementation on a discretized version of the torus. It also explains in detail the technique of the programmable bootstrapping.</td>
    <td>Marc Joye</td>
    <td>Theory</td>
</tr>

<tr>
    <td>2021.09.30</td>
    <td><a href="https://medium.com/p/f2bcfd614131/">Concrete Boolean and Conway's Game of Life</a></td>
    <td>When developing any application, we first need an understanding of what it is that we want to achieve. In this case, we want to implement Conway’s Game of Life through encrypted Boolean operations.</td>
    <td>Florent Michel, Joseph Wilson and Edward Cottle.</td>
    <td>Tutorials</td>
</tr>

<tr>
    <td>2021.09.15</td>
    <td><a href="https://6min.zama.ai">6-minute introduction to end to end encryption and try out an FHE demo for yourself</a></td>
    <td>Encryption has been around for thousands of years, used across the ages to send secret messages to one another. For example the Caesar cipher, which consists of simply swapping letters in the alphabet, is one of the earliest encryption techniques, dating back to 60BC! [...]</td>
    <td>Zama</td>
    <td>Non-technical</td>
</tr>


<tr>
    <td>2021.08.26</td>
    <td><a href="https://fhe-org.github.io/meetups/running-numpy-programs-homomorphically">Homomorphic Machine Learning using Numpy & Concrete</a></td>
    <td>Making FHE mainstream requires tools that make it easy to use for non-cryptographers. Being able to take regular Numpy programs and run them on encrypted data would enable data scientists to integrate FHE into their models, however complex they might be. In this talk, the team at Zama introduce a homomorphic numpy compiler, demonstrate how it can be used to run a recurrent neural network on encrypted data, and share their thoughts on homomorphic compiling.</td>
    <td>Rand Hindi, Ayoub Benaissa, and Samuel Tap</td>
    <td>Tutorials</td>
</tr>

<tr>
    <td>2021.08.26</td>
    <td><a href="">People shouldn't care about privacy</a></td>
    <td>A technique called homomorphic encryption is about to radically change how we guarantee privacy online.</td>
    <td>Rand Hindi</td>
    <td>Non-technical</td>
</tr>

<tr>
    <td>2021.08.26</td>
    <td><a href="https://fhe-org.github.io/meetups/google-c++-to-fhe-transpiler">Google's C++ to FHE compiler</a></td>
    <td>In this talk, Shruthi and Rob present the Fully Homomorphic Encryption Transpiler recently released by Google. The FHE transpiler automatically converts high-level [C++] code that operates on unencrypted data into a form that performs the same computation on encrypted data.</td>
    <td>Shruthi Gorantala and Rob Springer</td>
    <td>Engineering</td>
</tr>

<tr>
    <td>2021.05.20</td>
    <td><a href="https://fhe-org.github.io/meetups/fhe-development-tools">Developer Tools & Compilers</a></td>
    <td>In this talk, Alex walks through the inherent engineering challenges in developing FHE applications and discusses how tools like compilers that translate between standard programs and FHE implementations can step in to address some of these complexities. He discusses recent work in this space and, using different case study applications that represent common aspects of FHE applications, highlight where barriers to entry have been successfully lowered and where they still remain. Finally, he concludes by showing examples of what non-expert developers can achieve today and outline future directions for FHE compiler development.</td>
    <td>Alexander Viand</td>
    <td>Engineering</td>
</tr>

<tr>
    <td>2021.04.15</td>
    <td><a href="https://fhe-org.github.io/meetups/tfhe-deep-dive">TFHE deep dive</a></td>
    <td>TFHE is a fully homomorphic encryption scheme that enables fast homomorphic operations on booleans, integers and reals. By enabling both leveled and bootstrapped operations, TFHE can be used for a wide range of usecases, from homomorphic boolean circuits to homomorphic neural networks. In this talk, Ilaria will do a deep dive on TFHE, and explain the key concepts behind it.</td>
    <td>Ilaria Chillotti</td>
    <td>Theory</td>
</tr>


<tr>
    <td>2021.04.15</td>
    <td><a href="https://fhe-org.github.io/meetups/private-set-intersection-via-somewhat-homomorphic-encryption">Private set intersection via somewhat homomorphic encryption</a></td>
    <td>Somewhat/Fully Homomorphic Encryption (SHE/FHE) is a versatile tool for many cryptographic applications. In this talk, Ilia shows how to exploit SHE/FHE to build Private Set Intersection (PSI) protocols where two parties wish to compute the intersection of their respective private sets. He discusses the general framework of such protocols and the state-of-the-art optimizations including the results from ACM CCS’21.</td>
    <td>Ilia Iliashenko</td>
    <td>Engineering</td>
</tr>

</table>

<!--- Footer --->
<hr />
💙 This website is a resource provided and contributed by the FHE.org community. We welcome any contributions to this website! Read the <a href="https://fhe-org.github.io/contrib">contribution guidelines</a> first and simply open a PR on the <a href="https://github.com/fhe-org/fhe-org">Github repo</a> to add your resources.
