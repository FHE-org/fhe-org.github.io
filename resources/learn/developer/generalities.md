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
  <a href="https://fhe-org.github.io/resources/schemes"><b>Learn</b></a>
</p>
<hr/>
<!-- /Resource categories links -->

# Learner Track: Developer [<img src="https://img.shields.io/badge/Edit%20this%20page%20on-Github-lightgrey?style=flat-square">](https://github.com/FHE-org/fhe-org.github.io/blob/main/resources/learm/developer/readme.md)
<sub>This learner track assumes you are a developer wanting to learn about FHE. To see other available Learner Tracks, [click here](https://github.com/FHE-org/fhe-org.github.io/blob/carrotcypher-patch-1/resources/learn/readme.md).</sub>
<br>

# Genaralities


Fully homomorphic encryption (FHE) allows you to run computations on encrypted data without decrypting it first. As a developer, this means you’re able to write code that doesn’t jeopardize the privacy of your users.

Benefits of using FHE in your applications as a developer can include:

- Demonstrating a commitment to data privacy and security to your users, and enhancing user trust in your application.
- Improving security by performing computations on cloud data without exposing to potential threats or unauthorized access.
- Ensuring that sensitive data remains protected even when third-party sharing is a required property of your application
- Complying with privacy regulations and standards by default

<br>


## Ideal Use Cases

Homomorphic encryption is ideal for some use cases more than others.

<br>


### Cloud / Distributed Computing

<table>


<tr>
<td colspan=2>
FHE enables secure computations on encrypted data stored in the cloud without the need to decrypt it. This preserves the confidentiality of sensitive data even when processed by third-party cloud service providers.
</td>
</tr>

<tr>
<td>Working Examples</td>
<td>

- [Lattigo-polls: schedule meeting using Lattigo](https://github.com/ldsec/lattigo-polls-demo) by **Lattigo** on **Sep 2, 2022**

</td>
</tr>

<tr>
<td>More Reading</td>
<td>


</td>  
</tr>
</table>

<br>

### Data Analysis and Actions

<table>

<tr>
<td colspan=2>
FHE allows for analysis and performing actions on encrypted data without revealing the actual content analysts. For instance, healthcare providers can conduct statistical analysis on confidential patient information without decrypting it, thus maintaining patient privacy.
</td>
</tr>

<tr>
<td>Working Examples</td>
<td>

- [Encrypted image filtering](https://huggingface.co/spaces/zama-fhe/encrypted_image_filtering) by **Zama** on **Feb 23, 2023**
- [Sentiment analysis over encrypted data](https://huggingface.co/spaces/zama-fhe/encrypted_sentiment_analysis) by **Zama** on **Nov 17, 2022**
- [Conway’s Game of Life](https://www.zama.ai/post/the-game-of-life-rebooted-with-concrete-v0-2) by **Zama** on **Aug 18, 2022**

</td>
</tr>

<tr>
<td>More Reading</td>
<td>

- [Human action recognition](https://www.nature.com/articles/s41467-022-32168-5) by **Miran Kim; Xiaoqian Jiang; Kristin Lauter; Elkhan Ismayilzada; Shayan Shams** on **Aug 15, 2022**
- [Ensuring security of artificial pancreas device system using homomorphic encryption](https://www.sciencedirect.com/science/article/abs/pii/S174680942200516X) by **Haotian Weng; Chirath Hettiarachchi; Christopher Nolan; Hanna Suominen; Artem Lenskiy** on **Jan 15, 2022**


</td>  
</tr>
</table>

<br>

### Machine Learning


<table>

<tr>
<td colspan=2>
FHE enables machine learning models to be trained on encrypted data. This is beneficial when data owners are hesitant to share their data for privacy reasons. With FHE, data remains encrypted during the model training process, and only the encrypted model is shared.
</td>
</tr>

<tr>
<td>Working Examples</td>
<td>

<i>Have examples to contribute? [Add them here!](https://github.com/FHE-org/fhe-org.github.io/blob/main/resources/learm/developer/readme.md)</i>

</td>
</tr>

<tr>
<td>More Reading</td>
<td>

</td>  
</tr>
</table>


<br>

### Accounting / Banking



<table>

<tr>
<td colspan=2>
FHE allows financial institutions to analyze encrypted financial transactions for fraud detection while maintaining client confidentiality.
</td>
</tr>

<tr>
<td>Working Examples</td>
<td>

- [Private bitcoin balance](https://btc.usespiral.com/) by **Blyss** on **Sept 15, 2022**

</td>
</tr>

<tr>
<td>More Reading</td>
<td>

</td>  
</tr>
</table>

<br>

### Blind and Private Databases



<table>

<tr>
<td colspan=2>
FHE allows encrypted search and querying of databases without exposing search criteria or database contents, thus ensuring privacy for data owners who want to allow others to search and access information.
</td>
</tr>

<tr>
<td>Working Examples</td>
<td>

**Working Examples**

- [Encrypted Key-value Database using FHE](https://www.zama.ai/post/encrypted-key-value-database-using-homomorphic-encryption) by **Zama** on **Mar 16, 2023**
- [Private password checker](https://playground.blyss.dev/passwords) by **Blyss** on **Feb 21, 2023**
- [Private bitcoin balance](https://btc.usespiral.com/) by **Blyss** on **Sept 15, 2022**


</td>
</tr>

<tr>
<td>More Reading</td>
<td>

</td>  
</tr>
</table>


<br>


## Threat model

Homomorphic encryption is not a silver bullet for all use cases. As with all cryptography, how practical or safe it is to use is ultimately dependent on the use case, implementation, library, and underlying scheme.

<br>
<br>

<table>
<tr>
<td>Encryption Strength</td>
<td>The security of homomorphic encryption relies on the strength of the underlying encryption scheme. If the encryption scheme is compromised or broken, the encrypted data and computations could be exposed.</td>
</tr>

<tr>
<td>Implementation Flaws</td>
<td>Like any cryptographic system, the implementation of homomorphic encryption algorithms and protocols may introduce vulnerabilities. Implementation flaws, such as programming errors or side-channel attacks, could potentially compromise the security of the encrypted data. It's important to have your code audited, use libraries that are audited, and also schemes that have been publicly tested and accepted by the community as safe.</td>
</tr>

<tr>
<td>Metadata Leakage</td>
<td>While homomorphic encryption protects the content of the data, it does not hide the metadata associated with the encrypted computations. Metadata leakage could enable attackers to infer information about the encrypted data, such as its size, access patterns, or the type of computations being performed.</td>
</tr>

<tr>
<td>Key Management</td>
<td>Homomorphic encryption schemes typically require the management of encryption keys. Adequate key management practices, including key generation, distribution, storage, and revocation, are crucial to maintaining the security of the encrypted data.</td>
</tr>

</table>

<br>

**More Reading**

- [FHE as a Puzzle Piece](https://www.zama.ai/post/fhe-as-a-puzzle-piece) by **Nigel Smart** on **Jan 5, 2023**


<br>
<br>


<table align=center>
<tr>
<td>ᐊ Learner Tracks</td>
<td>Learner Track: Developer - Generalities</td>
<td><a href="https://github.com/FHE-org/fhe-org.github.io/blob/carrotcypher-patch-1/resources/learn/developer/constraints.md">Constraints ᐅ</a></td>
</tr>
</table>












<!--- Footer --->
<hr/>
💙 This website is a resource provided and contributed by the FHE.org community and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>. We welcome any contributions to this website! Read the <a href="https://fhe-org.github.io/contrib">contribution guidelines</a> first and simply open a PR on the <a href="https://github.com/fhe-org/fhe-org">Github repo</a> to add your resources.
