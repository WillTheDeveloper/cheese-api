const Contributor = {
    1: {
        id: 1,
        name: 'William Burton',
        github: 'WillTheDeveloper',
        discord: 'WillDotChill#2156',
        member: true,
    }
}

const Cheese = {
    1: {
        id: 1,
        name: 'Parmesan',
        description: 'Parmesan is an Italian hard, granular cheese produced from cow\'s milk and aged at least 12 months. It is named after the producing areas, the provinces of Reggio Emilia, Parma, the part of Bologna west of the Reno, and Modena; and the part of Mantua on the right/south bank of the Po.',
        origin: 'Unknown',
        score: 5,
        legal: true,
        searches: 50000,
        repository: 'https://github.com/cheese-official/parmesan',
        created_by: Contributor["1"]
    },
    2: {
        id: 2,
        name: 'Cheddar',
        description: 'Cheddar cheese (or simply cheddar) is a relatively hard, off-white sometimes sharp-tasting, natural cheese.',
        origin: 'Unknown',
        score: 3,
        legal: true,
        searches: 69000,
        repository: 'https://github.com/cheese-official/cheddar',
        created_by: Contributor["1"]
    },
    3: {
        id: 3,
        name: 'Gorgonzola',
        description: 'Gorgonzola is a veined blue cheese, originally from Italy, made from unskimmed cow\'s milk. It can be buttery or firm, crumbly and quite salty, with a "bite" from its blue veining.',
        origin: 'Unknown',
        score: 4,
        legal: true,
        searches: 55000,
        repository: 'https://github.com/cheese-official/gorgonzola',
        created_by: Contributor["1"]
    },
    4: {
        id: 4,
        name: 'Red leicester',
        description: 'Red Leicester is an English cheese, made in a similar manner to Cheddar cheese, although it is crumbly in texture, and typically sold at 6 to 12 months of age. The rind is reddish-orange, with a powdery mould on it.',
        origin: 'Unknown',
        score: 10,
        legal: true,
        searches: 99999,
        repository: 'https://github.com/cheese-official/red-leicester',
        created_by: Contributor["1"]
    },
    5: {
        id: 5,
        name: 'Casu-marzu',
        description: 'Those with a weak stomach may want to stop reading now, as there is an Italian cheese delicacy that is not for the faint of heart.',
        origin: 'Unknown',
        score: 1,
        legal: false,
        searches: 1,
        repository: 'https://github.com/cheese-official/casu-marzu',
        created_by: Contributor["1"]
    }
};



module.exports = {Cheese, Contributor};
