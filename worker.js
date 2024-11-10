addEventListener('fetch', event => {
  event.respondWith(handleRequest(event))
})

async function handleRequest(event) {
  const url = new URL(event.request.url)

  try {
    if (url.pathname === "/" || url.pathname.endsWith(".html")) {
      const response = await fetch(`https://paradigmnuxt2.pages.dev${url.pathname}`)
      return response
    }

    if (url.pathname.startsWith("/api/")) {
      const apiUrl ="https://paradigmapi.pythonanywhere.com";
      const apiResponse = await fetch(apiUrl + url.pathname, {
        method: event.request.method,
        headers: event.request.headers,
        body: event.request.body
      });

      return apiResponse
    }

    const response = await fetch(`https://paradigmnuxt2.pages.dev${url.pathname}`)
    return response

  } catch (e) {
    return new Response('Error: ' + e.message, { status: 500 })
  }
}
