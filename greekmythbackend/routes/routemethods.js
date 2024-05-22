const God = require("../schema/godschema")

module.exports.create = async (req, res) => {
    const { name, shortdetails, details } = req.body
    console.log('Create Method called.')
     const newGod = await new God({
         name: name,
         shortdetails: shortdetails,
         details: details
    });

    await newGod.save()
        .then(god => res.status(200).json({
                message: "Successfully created",
                data: newGod
            }))
        .catch(err => res.status(500).json({
                message: err.message
        }))

}
module.exports.deleteGod = async (req, res) => {
    const { name } = req.body
    console.log('Delete Method called.')

    await God.findOneAndDelete({name: name})
        .then(user => res.status(200).json({
            message: "Successfully deleted",
            data: user
        }))
        .catch(err => res.status(500).json({
            message: "God doesn't exist"
        }))
}

module.exports.getGods = async (req, res) => {

}