export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (url.hostname === 'www.withjoyfullipslyrics.com') {
      url.hostname = 'withjoyfullipslyrics.com';
      return Response.redirect(url.toString(), 301);
    }

    if (
      pathname !== '/' &&
      !pathname.endsWith('/') &&
      !pathname.startsWith('/_') &&
      !pathname.includes('.') &&
      !pathname.startsWith('/api/')
    ) {
      const target = `${pathname}/` + (url.search || '');
      return Response.redirect(target, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
