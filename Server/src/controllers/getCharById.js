const axios = require("axios");
const URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

const getCharById = async(req , res) =>{
    try {
        const {id} = req.params;

        const response = await axios(`${URL}/${id}`);
        const {name,type,frameType,desc,race,archetype,card_sets, card_images} = response.data;

        if(name){
            const deck = {
                id,
                name,
                type,
                frameType,
                desc,
                race,
                archetype,
                card_sets,
                card_images
            };
            return res.status(200).json(deck);
        }


        return res.status(404).send("Not Found");

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    getCharById
};