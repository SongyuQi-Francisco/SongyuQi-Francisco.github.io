---
permalink: /about
title: "About Me"
excerpt: ""
author_profile: false
layout: default
---

# About Me

I am Songyu Qi (Francisco), a Master of Information Technology student in the [School of Computer Science and Engineering](https://www.unsw.edu.au/engineering/our-schools/computer-science-and-engineering) at **UNSW Sydney**, where I do research under the supervision of [Prof. Lina Yao](https://www.linayao.com/) and work closely with [Chengkai Huang](https://chengkai-huang.github.io/).

My research focuses on LLM-based agents for personalization: agentic recommender systems, agent skill libraries, and how long-lived agents should update, verify, and govern persistent user memory. I care about careful problem formulation and evaluation that is reproducible and auditable.

# 🔬 Research Experience

**Research Student, School of Computer Science and Engineering, UNSW Sydney** &nbsp;·&nbsp; *2026 – Present*<br>
Supervisor: [Prof. Lina Yao](https://www.linayao.com/) &nbsp;·&nbsp; Mentor: [Chengkai Huang](https://chengkai-huang.github.io/)

* **CPSE: Cognitive Persona Agent Skill Evolution for Recommender Systems** (Research Project A)
  * Designed a framework that separates declarative user profiles (cognitive personas) from a globally shared, evolvable library of procedural skills for LLM recommendation agents.
  * Built persona-guided skill routing and a failure-driven refinement loop that updates skills from recommendation errors using contrastive chain-of-thought reflection.
  * Evaluated the framework on Amazon, Yelp and Goodreads recommendation tasks from the WWW'25 AgentSociety Challenge.
* **ColdSkill: Cold-Start Routing for Agent Skill Libraries** (first-author manuscript, under review)
  * Proposed a zero-retraining expansion layer that uses warm skills as anchors to recover newly added cold skills that direct query-skill retrieval misses, via semantic skill-skill similarity and a task co-membership graph.
  * Designed a reranker-compatible variant that keeps a strong reranker's top decision and uses the remaining top-K slots for cold skills, with shuffled-edge controls and multi-split evaluation.
* **Research Project B** (ongoing): continuing work on agentic recommender systems.

**Independent Research: Memory Governance for Long-Lived Recommender Agents** &nbsp;·&nbsp; *2026 – Present*

* Developing a research agenda on how persistent user memory in recommender agents should be measured, verified against evidence, and governed over its lifecycle.
* Building a provenance-audited benchmark pipeline with deterministic structural checks and explicit claim gates. Empirical evaluation is in progress.

# 📖 Education

* Master of Information Technology, UNSW Sydney, 2025 – 2026 (expected)

# 🛠 Skills

* **Research:** LLM agents, recommender systems, retrieval and reranking, benchmark and protocol design, failure analysis, reproducible experimentation
* **Tools:** Python, PyTorch, Hugging Face Transformers, LangChain, pandas, scikit-learn, Git, LaTeX, Linux

# 📧 Contact

I am open to research collaborations and to research-oriented roles (research assistant, research engineer, internships) in LLM agents and recommender systems. Please feel free to reach out at **francisco.qsy [at] gmail [dot] com**.
