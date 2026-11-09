const hymnRedirects = {
  '/hymn-lyrics/creation-hymns/l-26-my-god-only-source-of-my-joy-psalm-15/': '/hymn-lyrics/creation-hymns/l-26-my-god-joy/',
  '/hymn-lyrics/departed-hymns/r-3-this-day-you-shall-be-with-me-psalm-114/': '/hymn-lyrics/departed-hymns/r-3-this-day/',
  '/hymn-lyrics/sacred-heart-hymns/m-2-bend-your-neck-to-my-yoke-psalm-33/': '/hymn-lyrics/sacred-heart-hymns/m-2-bend-neck/',
  '/hymn-lyrics/easter-hymns/i-19-o-give-thanks-to-the-lord-psalm-117/': '/hymn-lyrics/easter-hymns/i-19-give-thanks/',
  '/hymn-lyrics/entrance-hymns/a-28-this-is-the-day-the-lord-has-made/': '/hymn-lyrics/entrance-hymns/a-28-this-day/',
  '/hymn-lyrics/entrance-hymns/a-30-let-me-sing-of-your-law-psalm-118/': '/hymn-lyrics/entrance-hymns/a-30-sing-law/',
  '/hymn-lyrics/entrance-hymns/a-53-in-the-lord-is-my-hope-psalm-90/': '/hymn-lyrics/entrance-hymns/a-53-lord-hope/',
  '/hymn-lyrics/entrance-hymns/a-103-let-me-live-in-your-house-o-lord/': '/hymn-lyrics/entrance-hymns/a-103-live-house/',
  '/hymn-lyrics/entrance-hymns/a-111-happy-those-who-hear-the-word-of-god/': '/hymn-lyrics/entrance-hymns/a-111-hear-word/',
  '/hymn-lyrics/entrance-hymns/a-112-how-lovely-is-your-dwelling-place-psalm-83/': '/hymn-lyrics/entrance-hymns/a-112-lovely-dwelling/',
  '/hymn-lyrics/marriage-hymns/o-3-may-the-lord-protect-our-homes-psalm-126/': '/hymn-lyrics/marriage-hymns/o-3-protect-homes/',
  '/hymn-lyrics/passion-hymns/h-9-you-who-pass-by-the-way-psalm-68/': '/hymn-lyrics/passion-hymns/h-9-pass-way/',
  '/hymn-lyrics/recessional-hymns/x-15-may-the-lord-make-our-love-mount-up/': '/hymn-lyrics/recessional-hymns/x-15-love-mount/',
  '/hymn-lyrics/thanksgiving-hymns/cc-5-i-will-sing-god-s-praises-psalm-22/': '/hymn-lyrics/thanksgiving-hymns/cc-5-sing-praises/',
  '/hymn-lyrics/thanksgiving-hymns/c-17-i-will-sing-to-my-god-psalm-145/': '/hymn-lyrics/thanksgiving-hymns/c-17-sing-god/',
  '/hymn-lyrics/virgin-mary-hymns/t-8-my-soul-sings-the-glory-of-god/': '/hymn-lyrics/virgin-mary-hymns/t-8-soul-sings/',
  '/hymn-lyrics/christmas-carols/rudolph-the-red-nosed-reindeer/': '/hymn-lyrics/christmas-carols/rudolph/',
  '/hymn-lyrics/christmas-carols/we-wish-you-a-happy-christmas/': '/hymn-lyrics/christmas-carols/happy-christmas/',
};

const AGENT_LINK_HEADERS = [
  '</llms.txt>; rel="describedby"',
  '</sitemap-index.xml>; rel="alternate"; type="application/xml"',
];

function withVaryAccept(headers) {
  const vary = headers.get('vary') || '';
  if (!vary.split(',').some((v) => v.trim().toLowerCase() === 'accept')) {
    headers.set('vary', vary ? `${vary}, Accept` : 'Accept');
  }
}

function withAgentLinkHeaders(response) {
  const headers = new Headers(response.headers);
  for (const link of AGENT_LINK_HEADERS) headers.append('Link', link);
  withVaryAccept(headers);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function prefersMarkdown(request) {
  const accept = request.headers.get('accept');
  if (!accept) return false;
  return accept
    .toLowerCase()
    .split(',')
    .some((token) => {
      const [type, ...params] = token.trim().split(';');
      if (type.trim() !== 'text/markdown') return false;
      const qParam = params.map((p) => p.trim()).find((p) => p.startsWith('q='));
      return !qParam || parseFloat(qParam.slice(2)) > 0;
    });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (url.hostname === 'www.withjoyfullipslyrics.com') {
      url.hostname = 'withjoyfullipslyrics.com';
      return Response.redirect(url.toString(), 301);
    }

    const hymnRedirect = hymnRedirects[pathname];
    if (hymnRedirect) {
      return Response.redirect(new URL(hymnRedirect + (url.search || ''), url.origin).toString(), 301);
    }

    if (
      pathname !== '/' &&
      !pathname.endsWith('/') &&
      !pathname.startsWith('/_') &&
      !pathname.includes('.') &&
      !pathname.startsWith('/api/')
    ) {
      const target = `${pathname}/` + (url.search || '');
      return Response.redirect(new URL(target, url.origin).toString(), 301);
    }

    if (
      (request.method === 'GET' || request.method === 'HEAD') &&
      (pathname === '/' || pathname.endsWith('/')) &&
      prefersMarkdown(request)
    ) {
      const mdPath = pathname === '/' ? '/index.md' : `${pathname.slice(0, -1)}.md`;
      const mdResponse = await env.ASSETS.fetch(new Request(new URL(mdPath, url.origin), request));
      if (mdResponse.status === 200) {
        const headers = new Headers(mdResponse.headers);
        headers.set('content-type', 'text/markdown; charset=utf-8');
        withVaryAccept(headers);
        for (const link of AGENT_LINK_HEADERS) headers.append('Link', link);
        return new Response(mdResponse.body, { status: 200, headers });
      }
    }

    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status !== 404) {
      const contentType = assetResponse.headers.get('content-type') || '';
      return contentType.includes('text/html') ? withAgentLinkHeaders(assetResponse) : assetResponse;
    }

    const compactHymnMatch = pathname.match(/^\/hymn-lyrics\/([^/]+)\/([a-z]+-\d+)-[^/]+\/$/);
    if (compactHymnMatch) {
      const [, category, hymnCode] = compactHymnMatch;
      const target = `/hymn-lyrics/${category}/${hymnCode}/` + (url.search || '');
      return Response.redirect(new URL(target, url.origin).toString(), 301);
    }

    const notFoundPage = await env.ASSETS.fetch(new Request(new URL('/404/', url.origin)));
    if (notFoundPage.status === 200) {
      const headers = new Headers(notFoundPage.headers);
      for (const link of AGENT_LINK_HEADERS) headers.append('Link', link);
      withVaryAccept(headers);
      return new Response(notFoundPage.body, { status: 404, statusText: 'Not Found', headers });
    }

    return assetResponse;
  },
};
