export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

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
