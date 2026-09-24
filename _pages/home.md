---
permalink: /
title: ""
excerpt: ""
author_profile: false
layout: default
---

<div class="home-top">

<div class="home-profile-card">
  <img src="{{ site.author.avatar | absolute_url }}" class="home-avatar" alt="{{ site.author.name }}">
  <div class="home-profile-info">
    <h2 class="home-name">{{ site.author.name }}</h2>
    <p class="home-incoming">Master's Student in <a href="https://www.unsw.edu.au/engineering/our-schools/computer-science-and-engineering">Information Technology</a></p>
    <p class="home-university">UNSW Sydney</p>
    <div class="home-labs">
      <a href="https://www.linayao.com/">Advised by Prof. Lina Yao</a>
    </div>
    <hr class="home-divider">
    <div class="home-links">
      {% if site.author.location %}<span class="home-link-static"><i class="fas fa-fw fa-map-marker-alt"></i><span>{{ site.author.location }}</span></span>{% endif %}
      <a href="mailto:francisco.qsy@gmail.com"><i class="fas fa-fw fa-envelope"></i><span>francisco.qsy@gmail.com</span></a>
      <a href="mailto:songyu.qi@student.unsw.edu.au"><i class="fas fa-fw fa-university"></i><span>songyu.qi@student.unsw.edu.au</span></a>
      {% if site.author.googlescholar %}<a href="{{ site.author.googlescholar }}"><i class="fas fa-fw fa-graduation-cap"></i><span>Google Scholar</span></a>{% endif %}
      {% if site.author.github %}<a href="https://github.com/{{ site.author.github }}"><i class="fab fa-fw fa-github"></i><span>{{ site.author.github }}</span></a>{% endif %}
      {% if site.author.linkedin %}<a href="https://www.linkedin.com/in/{{ site.author.linkedin }}"><i class="fab fa-fw fa-linkedin"></i><span>Songyu Qi</span></a>{% endif %}
      {% if site.author.orcid %}<a href="{{ site.author.orcid }}"><i class="ai ai-orcid-square ai-fw"></i><span>ORCID</span></a>{% endif %}
    </div>
  </div>
</div>

<div class="home-bio" markdown="1">

<span class='anchor' id='about-me'></span>

I am Songyu Qi (Francisco), a Master of Information Technology student in the [School of Computer Science and Engineering](https://www.unsw.edu.au/engineering/our-schools/computer-science-and-engineering) at **UNSW Sydney**, where I do research under the supervision of [Prof. Lina Yao](https://www.linayao.com/) and work closely with [Chengkai Huang](https://chengkai-huang.github.io/).

My research focuses on <button class="research-topic-link" type="button" data-filter="agentic-rec" aria-pressed="false">agentic recommender systems (Agentic RS)</button>: LLM-based recommender agents that maintain user state across sessions and keep updating it through feedback. I currently study **evidence-grounded memory governance** for long-lived Agentic RS, which asks when a proposed change to a user's persistent memory is supported by evidence and should be committed, weakened, rejected, or rolled back before it shapes future recommendations. This covers three threads:

- **Memory transition measurement**: what counts as a valid preference-memory update, via taxonomies, benchmark probes, and annotation protocols.
- **Evidence-grounded verification**: attributing support and contradiction, and judging whether the evidence is sufficient.
- **Lifecycle governance**: controlling memory evolution under uncertainty and evaluating long-term recommendation stability.

I have also worked on <button class="research-topic-link" type="button" data-filter="agent-skills" aria-pressed="false">agent skill libraries</button> for recommendation agents, including how reusable skills are routed, evolved, and cold-started.

I am open to **research collaborations** and to **research-oriented roles** (research assistant, research engineer, internships) in agentic recommender systems and LLM agents. Please feel free to [reach out by email](mailto:{{ site.author.email }}).

# 🔥 News
- *2026.06*: &nbsp;📝 Our first-author paper ***ColdSkill***, on cold-start routing for agent skill libraries, is now under review.
- *2026.04*: &nbsp;🎉 Completed my research project ***CPSE*** on persona-guided skill evolution for recommendation agents, supervised by Prof. Lina Yao.

</div>

</div>

# 📝 Research
( Manuscripts under review and research reports )

{% include publications-list.html %}
