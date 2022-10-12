const { string } = require("joi");

    //~ ------------------------------ USER

    const equipmentProperties = {
        id: { type: 'integer' },
        description: { type: 'string' },
        icon_link: { type: 'string' },
    
        id: { type: 'integer' },
        description: { type: 'string' },
        icon_link: { type: 'string' },

        id: { type: 'integer' },
        description: { type: 'string' },
        icon_link: { type: 'string' },

        id: { type: 'integer' },
        description: { type: 'string' },
        icon_link: { type: 'string' },

        id: { type: 'integer' },
        description: { type: 'string' },
        icon_link: { type: 'string' },

        id: { type: 'integer' },
        description: { type: 'string' },
        icon_link: { type: 'string' },
    };

const equipmentExample = {
        id: 1,
        description: 'Imprimante',
        icon_link: 'images/equipment/3022251.png',

        id: 2,
        description: 'Fibre',
        icon_link: 'images/equipment/6131198.png',

        id: 3,
        description: 'Cuisine',
        icon_link: 'images/equipment/481486.png',

        id: 4,
        description: 'Double écran',
        icon_link: 'images/equipment/3018288.png',

        id: 5,
        description: 'Enceinte',
        icon_link: 'images/equipment/650504.png',

        id: 6,
        description: 'Piscine',
        icon_link: 'images/equipment/2932355.png',
    };

module.exports = { equipmentProperties, equipmentExample };