# Songyu Qi — Personal Homepage

Source of <https://songyuqi-francisco.github.io>.

Built on [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) (MIT License),
with layout adapted from [Ruiqi Chen's homepage](https://github.com/Ruiqi-Chen-0216/Ruiqi-Chen-0216.github.io).

## Where to edit

| What | File |
| --- | --- |
| Name, email, GitHub / Scholar / LinkedIn links | `_config.yml` (`author:` block) |
| Home page: profile card, bio, News | `_pages/home.md` |
| About page: experience, education, skills | `_pages/about.md` |
| Papers / reports (title, badge, figure, TL;DR, links) | `_data/publications.yml` |
| Figures and avatar | `images/` |
| Accent colours | `assets/css/main.scss` (`$accent-yellow`), `_sass/_variables.scss` (`$info-color`) |

## Local preview (optional)

```bash
bundle install
bundle exec jekyll serve   # then open http://127.0.0.1:4000
```
