Bun.serve({
    hostname: "0.0.0.0",
    port: 443,
    fetch(req) {
        return new Response("Site is under construction", {
            status: 200,
            headers: {
                "Content-Type": "text/html"
            }
        })
    },
    tls: {
        cert: Bun.file(`${__dirname}/cain_cert.pem`),
        key: Bun.file(`${__dirname}/cain_key.pem`)
    }
})