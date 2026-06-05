export default function handler(req, res) {
    const placeId = req.query.placeId;
    const jobId = req.query.gameInstanceId;

    if (!placeId || !jobId) {
        return res.status(400).send("Smth missing nga");
    }

    return res.redirect(`roblox://placeId=${placeId}&gameInstanceId=${jobId}`);
}
