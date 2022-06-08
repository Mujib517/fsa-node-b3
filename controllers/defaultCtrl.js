function get(req, res) {
    res.status(200);
    res.send("Hello ExpressJS");
}

// monitoring
// alerting
// 5mns, downtime
// localhost:3000/health
// facebook.com/health
function health(req, res) {
    const status = { status: 'Up' };
    res.status(200);
    res.json(status);
}

module.exports = {
    get,
    health
};

