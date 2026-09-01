# Changelog

## [1.11.1](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.11.0...v1.11.1) (2026-09-01)

### Bug Fixes

* **seo:** align site title brand with canonical site name ([8f79b98](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/8f79b98f3098a319c8c51102d2568ba2af96f015))

### Maintenance

* **release:** 1.11.0 ([44936ae](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/44936aef0bf061cb94d1dc34b739944fef4c76e1))

## [1.11.0](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.10.2...v1.11.0) (2026-09-01)

### Features

* **seo:** add WebPage schema for hymn pages linking MusicComposition and BreadcrumbList by [@id](https://github.com/id) ([b83539d](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/b83539d87ce8161a3e49eadbf0cbac18aad34f10))

### Code Refactoring

* **seo:** rewrite hymn page descriptions and align og tags, URLs, and JSON-LD [@id](https://github.com/id) across hymn lyrics ([1c9b55c](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/1c9b55c6f4a47279e3c2aaa676f7a72ad441d9f1))

### Maintenance

* **release:** 1.10.2 ([c19275d](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/c19275d84443b80857acabbe34d32027b170c47a))

## [1.10.2](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.10.1...v1.10.2) (2026-09-01)

### Bug Fixes

* **seo:** correct worker redirects, canonical links, and category card URLs ([c942658](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/c9426588f6a3b1e194dc99bdc91d167c88b6db26))

### Maintenance

* **release:** 1.10.1 ([f9f80d3](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/f9f80d3c29003fed3f8ab2391ec2301364bbaf8d))

## [1.10.1](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.10.0...v1.10.1) (2026-09-01)

### Bug Fixes

* **hymn-lyrics:** add missing line breaks in BB.13 final stanza ([95e08e3](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/95e08e34b7855239b88e21bd7bf8c37a841feb0c))

### Code Refactoring

* **worker:** enable run_worker_first and simplify redirects ([e498d7c](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/e498d7cec7ac5837ebaaea069f8166840fef10c6))

### Maintenance

* **release:** 1.10.0 ([f0c30c1](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/f0c30c1bdf71c51145776681b4709ccb2b18cd42))

## [1.10.0](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.9.0...v1.10.0) (2026-08-26)

### Features

* **deploy:** enforce trailing slash via Worker ([24cfe51](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/24cfe51fc4a742fd1ccf3713130362669ea908fb))
* **seo:** inject canonical link globally via MarkdownContent ([756f12f](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/756f12f7e8182490d86f0f856f50d67fbd26a868))
* **slug-redirects:** generate hymn slugs from frontmatter and add redirect rules ([990378f](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/990378fdfd2f9db74bbf15d1731a991115c07089))

### Bug Fixes

* **deploy:** redirect www host to apex domain ([1e65ffc](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/1e65ffc56182e7e683fd51a600781214bbc0db79))
* **hymn-lyrics:** update category index card links to renamed hymn slugs ([cc19246](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/cc19246246cef9f3f689c6e7a24622ded9f1ca5e))
* **seo:** drop redundant Catholic qualifier from hymn code descriptions ([0a22584](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/0a225845294b86bd9300e0b7b102ffcb1e3424e8))
* **seo:** shorten Easter hymns page title and drop redundant canonical ([f1a890e](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/f1a890ee8feafe551982c1c581ed6cb21a2e0d10))

### Code Refactoring

* **hymn-lyrics:** rename select hymn pages to compact slugs and titles ([9675255](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/96752553ce6237a773a246a183e80524f8928995))
* **seo:** remove per-page canonical tags from docs frontmatter ([de881b1](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/de881b13275411d34b995f9a4f670287d6fefd12))
* **seo:** shorten page titles for about, blog, and hymn pages ([2c4a8c3](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/2c4a8c3180821610dbfc095757a0b9944fe475f7))

### Maintenance

* **release:** 1.9.0 ([9f0eb15](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/9f0eb150efaf2a6d3adad04ccf27811f4d69bc2d))

## [1.9.0](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.8.0...v1.9.0) (2026-08-25)

### Features

* **seo:** add BreadcrumbList JSON-LD to hymn and category pages ([2d5f73a](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/2d5f73a897c960cf07d4b3119beb53761dde745c))
* **seo:** add canonical URLs and OpenGraph metadata to docs pages ([b5b0d8a](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/b5b0d8a61c5faabe573e39dd2ee0b55f955f3a0f))
* **seo:** add global og:site_name and og:type to category pages ([cf4bdcb](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/cf4bdcbf777cb3d18ed6081f9f6484562e23906c))
* **seo:** add JSON-LD structured data to category, blog, and about pages ([e21420f](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/e21420ffa42f63fc6e9ab4a80d95e6439727ef2c))

### Bug Fixes

* **seo:** correct homepage authorship semantics in JSON-LD ([80a331f](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/80a331fbcc5d3a2e8b362d00f5cc4baa9dfd1f48))
* **seo:** remove duplicated hymn codes in page descriptions ([93ea3bb](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/93ea3bb879d61f7a7a7ac78effbabf595f7ca0ab))

### Documentation

* **seo:** expand llms.txt with attribution guidance, site facts, and individual hymn page examples ([95cd74e](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/95cd74e501299419a0291f652370105a1ca0e030))

### Maintenance

* **release:** 1.8.0 ([e62fa01](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/e62fa01dc83d9a04ed6860adc69999371f19e6ae))

## [1.8.0](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.7.17...v1.8.0) (2026-08-24)

### Features

* **hymn-copy-enhancer:** support individual hymn pages and category redirects ([47dd7e6](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/47dd7e6d9a8d5392268f8da5ca8c891c5b00216f)), closes [#hash](https://github.com/neil-jay/lyrics-with-joyful-lips/issues/hash)

### Code Refactoring

* **hymn-lyrics:** split category files into per-hymn pages ([f9c0d0f](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/f9c0d0fe191e0e9fc4e7456f5414ecccbc8cbde3))

### Maintenance

* **release:** 1.7.17 ([0a376e6](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/0a376e6d9490c74eb6f83f8558e683dc08897176))
* **seo:** refresh IndexNow URL list with per-hymn pages ([edd073b](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/edd073b03376076abb9a3250afae4537e35ea8d0))

## [1.7.17](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.7.16...v1.7.17) (2026-08-22)

### Bug Fixes

* **release:** include all conventional commit types ([88721c1](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/88721c1c39140e3f544d841b8f9ca59c03a4ae44))

### Maintenance

* **deploy:** migrate from Cloudflare Pages to Workers ([d036868](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/d036868b22f26098c0acbd2b091eb59eff84fbe7))
* **release:** 1.7.16 ([4c657c2](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/4c657c2bfdb07615a372a13f2ad1a952901d4e8d))

## [1.7.16](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.7.15...v1.7.16) (2026-08-22)

### Bug Fixes

* **seo:** shorten meta descriptions to 25-160 characters for Bing compliance ([8b1014a](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/8b1014aba69860669bb4977c6a6b3b9f36d100b8))

## [1.7.15](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.7.14...v1.7.15) (2026-08-22)

### Bug Fixes

* **seo:** improve title consistency, heading hierarchy, and social metadata ([364f520](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/364f52063fd93e3c531075599bb5b3444891ba09))

## [1.7.14](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.7.13...v1.7.14) (2026-08-18)

### Build System

* **deps:** update npm packages to latest stable versions
  - astro: 6.4.8 -> 7.2.3
  - @astrojs/starlight: 0.40.0 -> 0.41.7
  - @astrojs/check: 0.9.9 -> 0.9.10
  - sharp: 0.35.2 -> 0.35.3
  - @release-it/conventional-changelog: 11.0.1 -> 12.0.0
  - conventional-changelog-conventionalcommits: 9.3.1 -> 10.3.0
  - release-it: 20.2.0 -> 21.0.2
  - typescript: held at 6.x (7.x breaks astro check programmatic API)

## [1.7.13](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.7.12...v1.7.13) (2026-06-21)

### Bug Fixes

* **content:** quote hymn page descriptions in frontmatter ([519c77e](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/519c77efba5e0bc20440ad3ef81ae696cd36f780))

## [1.7.12](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.7.11...v1.7.12) (2026-06-21)

## [1.7.11](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.7.10...v1.7.11) (2026-06-21)

### Bug Fixes

* **security:** update CSP to use 'unsafe-inline' for scripts and allow Google Fonts stylesheet ([0904f0b](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/0904f0b75424e002e5bd51f5ff365a2e40011b16))

## [1.7.10](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.7.9...v1.7.10) (2026-06-21)

### Bug Fixes

* **deps:** override esbuild to >=0.28.1 to resolve Windows arbitrary file read vulnerability ([15e2d48](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/15e2d48022cba5be12efba216beb2eb74c65543b))

## [1.7.9](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.7.8...v1.7.9) (2026-06-21)

## [1.7.8](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.7.7...v1.7.8) (2026-06-20)

## [1.7.7](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.7.6...v1.7.7) (2026-06-03)

## [1.7.6](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.7.5...v1.7.6) (2026-04-14)

## [1.7.5](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.7.4...v1.7.5) (2026-04-14)

## [1.7.4](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.7.3...v1.7.4) (2026-04-14)

## [1.7.3](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.7.2...v1.7.3) (2026-04-14)

### Bug Fixes

* restore hymn copy enhancer with CSP ([49187f9](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/49187f91b409f73c099d4067daaa2b322e6703b1))

## [1.7.2](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.7.1...v1.7.2) (2026-04-14)

### Bug Fixes

* **security:** remove unsafe-inline from CSP script-src ([11b6245](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/11b624517c9f10179aa2bb40e13c0fe57eb0876f))

## [1.7.1](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.7.0...v1.7.1) (2026-04-14)

## [1.7.0](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.6.4...v1.7.0) (2026-04-14)

### Features

* **hymn:** show green tick after copy ([fdb2e77](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/fdb2e77e434d70f2862454ab2651f72a7ea20a85))

## [1.6.4](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.6.3...v1.6.4) (2026-04-14)

## [1.6.3](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.6.2...v1.6.3) (2026-04-14)

## [1.6.2](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.6.1...v1.6.2) (2026-03-17)

### Bug Fixes

* use legacy favicon ([73af089](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/73af089cb8988aed29d775155249aa10a012d1f2))

## [1.6.1](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.6.0...v1.6.1) (2026-03-16)

### Bug Fixes

* output build directory for cloudflare pages ([b80820e](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/b80820e5872d05301c6259a7f771938317f2b6cc))

## [1.6.0](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.5.3...v1.6.0) (2026-03-16)

### Features

* migrate to astro starlight ([4621c65](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/4621c65cd2e59590732d783c18b131b5c870af75))

## [1.5.3](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.5.2...v1.5.3) (2026-03-16)

## [1.5.2](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.5.0...v1.5.2) (2026-03-16)

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.5.0](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.4.5...v1.5.0) (2026-03-16)


### Features

* **hymns:** Add missing hymns ([9d743b1](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/9d743b151f710ab612c372cee85f09a68c502eaf))

### [1.4.5](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.4.4...v1.4.5) (2026-03-16)


### CI

* update checkout and setup-node actions ([dc0ecd8](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/dc0ecd8e4ecdc5c27b4192ac0f4a36e8355aa593))

### [1.4.4](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.4.3...v1.4.4) (2026-03-16)

### [1.4.3](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.4.2...v1.4.3) (2025-09-21)


### Bug Fixes

* issue with author ([92f8207](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/92f8207157c3f5bf68b5e329b28f37bc3bf05df1))

### [1.4.2](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.4.1...v1.4.2) (2025-09-21)


### Performance Improvements

* SEO improvements ([bd8edc8](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/bd8edc8051a1361b29b26164fb60592f0325b46c))


### Styling

* update css component ([6a73a9d](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/6a73a9d3d64e59c5477763bb2e518226e996d0ff))

### [1.4.1](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.4.0...v1.4.1) (2025-01-03)


### Build System

* Re-order carol A-Z ([f5fc42c](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/f5fc42c2adc911a3e24e7588e2fcedaeb35278dd))

## [1.4.0](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.3.0...v1.4.0) (2025-01-02)


### Features

* Update Christmas Carols English ([f175bc3](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/f175bc3f0a2a7ac3108dda47f9366cf373e89d1e))

## [1.3.0](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.2.2...v1.3.0) (2024-12-20)


### Features

* Add Christmas carols section ([fab0029](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/fab002951f6f5184164544fff05a3ffcd685d7a7))

### [1.2.2](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.2.1...v1.2.2) (2024-12-20)


### Build System

* Update packages ([8cd4b83](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/8cd4b839e4fc4ec3f8825317bc412dfa91483203))

### [1.2.1](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.2.0...v1.2.1) (2024-11-22)


### Bug Fixes

* Updated ISO Lang ([97d027b](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/97d027bbc0cbdb5f7e76344d069d0eb36bca887b))

## [1.2.0](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.1.0...v1.2.0) (2024-11-21)


### Features

* Docusaurus update to 3.6. ([06e0d75](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/06e0d756a29c1f359a5262e3981bbeb477e8d6da))

## [1.1.0](https://github.com/neil-jay/lyrics-with-joyful-lips/compare/v1.0.1...v1.1.0) (2024-11-21)


### Features

* Add two hymns ([26fe31a](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/26fe31ab61f711477cb5b1cf0d4bf26915e75601))

### 1.0.1 (2024-11-21)


### CI

* Add Git ACtion Config ([464b327](https://github.com/neil-jay/lyrics-with-joyful-lips/commit/464b32788330defc0dc36dfb24ebf875d9f7c637))
