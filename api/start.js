export default function handler(req, res) {
    const { placeId, gameInstanceId } = req.query;
    if (!placeId || !gameInstanceId) return res.status(400).send("Missing IDs");

    const url = `roblox://placeId=${placeId}&gameInstanceId=${gameInstanceId}`;
    
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('CDN-Cache-Control', 'no-store');
    res.setHeader('Vercel-CDN-Cache-Control', 'no-store');

    return res.status(200).send(`
        <title>QUYX Hub Joiner</title>
        <meta property="og:title" content="QUYX Hub Joiner">
        <meta property="og:description" content="Join your victim via this link gng">
        <meta property="og:theme-color" content="#1D4ED8">
        <script>window.location.href="${url}"</script>
    `);
}
