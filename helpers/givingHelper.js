const Giving = require("../models").givingModel;

module.exports = newGiving = async params => {
    let isSuccessful = false;
    const nGiving = new Giving(params);
    Giving.init().then(async () => {
        await nGiving.save().then(srs => {
            if (srs) {
                isSuccessful = true;
                console.log("New giving saved");
            }
        });
    }
    );
    return isSuccessful
}
module.exports = {
    newGiving
};