const Cheese = {
    1: {
        id: 1,
        name: 'Parmesan',
        description: 'Parmesan is an Italian hard, granular cheese produced from cow\'s milk and aged at least 12 months. It is named after the producing areas, the provinces of Reggio Emilia, Parma, the part of Bologna west of the Reno, and Modena; and the part of Mantua on the right/south bank of the Po.',
        origin: 'Unknown',
        score: 5,
        legal: true,
        searches: 50000,
    },
    2: {
        id: 2,
        name: 'Cheddar',
        description: 'Cheddar cheese (or simply cheddar) is a relatively hard, off-white sometimes sharp-tasting, natural cheese.',
        origin: 'Unknown',
        score: 3,
        legal: true,
        searches: 69000
    }
};

const Contributor = {
    1: {
        id: 1,
        name: 'William Burton',
        github: 'WillTheDeveloper',
        discord: 'WillDotChill#2156',
        member: true
    }
}

module.exports = {Cheese, Contributor};
