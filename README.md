# Mandaffaaord Portfolio

Personal portfolio site for Andreas Jensen. Plain static HTML/CSS/JS, no build step.

## Structure

- `index.html`, `about.html`, `timeline.html`, `portfolio.html`, `contact.html` — root pages
- `categories/` — category landing pages (web, video, photography, animation, illustrations, art)
- `projects/` — individual project case-study pages, plus their media (`foto/`, `video/`, `animation/`, `illustration/`)
- `css/`, `js/`, `font/`, `favicon/`, `ikoner/`, `pdf/` — shared assets used across pages
- `sources/` — full source snapshots of older individual projects, served live and linked directly from their project pages (project-flow, project-share, project-port, project-ulyk, project-vbds)

## Third-party modules

- **Flickity** (`css/flickity.css`, `js/flickity.pkgd.min.js`) — vendored locally. These are Flickity's own "packaged" static build, which is the module's default distribution for drop-in use on a plain HTML site without a bundler — not a custom fork or CDN substitute.
- **Flickity Fullscreen plugin** and **Video.js** — loaded from CDN (unpkg / zencdn) rather than vendored, used for gallery fullscreen and the video/animation players respectively.

## Asset storage

The `foto/`, `video/`, `illustration/` and `animation/` media folders are served from the hosting module's local media mount, not from this repo

## Known issues / backlog

Update contents - has not been updated for years...