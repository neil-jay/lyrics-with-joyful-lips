# Contributing

Thanks for helping improve With Joyful Lips Lyrics. This repository contains a static Astro + Starlight site where hymn lyrics are maintained as Markdown/MDX content.

## Ways to Contribute
- Fix typos, formatting, headings, or broken links
- Correct transcription errors (missing verses, punctuation, ordering)
- Improve site UX (copy-to-clipboard, layout, accessibility)
- Improve build, performance, or SEO (without changing lyric meaning)

## Ground Rules for Lyrics
- Preserve meaning and structure as printed in the source (don’t modernize wording)
- Prefer small, verifiable changes; include a clear description in the PR
- If possible, cite the book section/page in the PR description (not in the files)
- Don’t add content you don’t have rights to share; this project aims to stay within fair-use, worship, and educational contexts

## Development Setup
Prerequisites:
- Node.js (see package.json engines)
- npm

Install and run:

```bash
npm install
npm run dev
```

Before opening a PR:

```bash
npm run check
npm run build
```

## Content Editing Notes
- Content lives in src/content/docs
- Hymns are under src/content/docs/hymn-lyrics
- Prefer consistent headings, stanza numbering, and spacing across hymns
- Keep frontmatter intact when editing MD/MDX pages

## Commit Messages
This project follows Conventional Commits. Examples:
- fix(content): correct verse order in Advent hymns
- fix(ui): improve copy button focus styles
- chore(deps): update dependencies

## Pull Requests
- Keep PRs focused and small where possible
- Describe what changed and why
- For lyric corrections, describe how you verified the change against the source
- If your change affects UI or build output, include screenshots or a short description of what to look at

## Code of Conduct
By participating, you agree to follow the Code of Conduct in .github/CODE_OF_CONDUCT.md.

## License
By contributing, you agree that your contributions to the software portion of this repository are licensed under the MIT License (see LICENSE). Hymn lyrics and other third-party source material are not covered by the MIT License.
