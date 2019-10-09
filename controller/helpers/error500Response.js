module.dbErrorResp = (err) => {
    res.status(500).send({
        message: err.message || "an error occurred while retrieving the lists"
    })
}