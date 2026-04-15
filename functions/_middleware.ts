// Cloudflare Pages Functions 미들웨어 — HTTP Basic Auth
export const onRequest: PagesFunction<{ MAGPIE_PASSWORD: string }> = async ({ request, next, env }) => {
  const auth = request.headers.get("Authorization");

  if (!auth || !auth.startsWith("Basic ")) {
    return unauthorized();
  }

  try {
    const decoded = atob(auth.slice(6));
    const [, password] = decoded.split(":", 2);
    if (password !== env.MAGPIE_PASSWORD) {
      return unauthorized();
    }
  } catch {
    return unauthorized();
  }

  return next();
};

function unauthorized(): Response {
  return new Response("Unauthorized — Magpie Wiki", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Magpie Wiki"',
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
