/*
* -----------------------------------------------------------------------------
* CLASSES
* -----------------------------------------------------------------------------
*/

class Element {

    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }

    age() {
        return new Date().getFullYear() - this.buildYear;
    }
}

class Park extends Element {

    constructor(name, buildYear, area, trees) {
        super(name, buildYear);
        this.area = area;
        this.trees = trees;
    };

    density() {
        const density = this.trees / this.area;
        console.log(`${this.name} has a density of ${density} trees par square km.`);
    };

    treesCap() {
        if (this.trees >= 1000) {
            console.log(`${this.name} has more than 1000 trees.`);
        }
    }

}

class Street extends Element {

    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classification() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`)
    }

}

/*
* -----------------------------------------------------------------------------
* REPORT FUNCTION
* -----------------------------------------------------------------------------
*/

const reporter = () => {

    console.log(`---------- PARKS REPORT ----------`);

    let parksAges = allParks.map((current) => current.age());
    let sumParksAges = parksAges.reduce((previous, current) => current += previous);
    let avgParksAges = sumParksAges / parksAges.length;
    console.log(`Our ${parksAges.length} parks have an average age of ${avgParksAges} years.`);

    allParks.forEach((current) => current.density());
    allParks.forEach((current) => current.treesCap());

    console.log(`---------- STREETS REPORT ----------`);

    let streetsLengthes = allStreets.map((current) => current.length);
    let sumStreetsLengthes = streetsLengthes.reduce((previous, current) => current += previous);
    let avgStreetsLengthes = sumStreetsLengthes / streetsLengthes.length;

    console.log(`Our ${streetsLengthes.length} streets have a total length of ${sumStreetsLengthes} km and an average length of ${avgStreetsLengthes} km.`);

    allStreets.forEach((current) => current.classification());

};

/*
* -----------------------------------------------------------------------------
* EXECUTION
* -----------------------------------------------------------------------------
*/

const allParks = [
    new Park('Antoine\'s Park', 1936, 150890, 10508767),
    new Park('Aimée\'s Park', 2000, 89200, 10799797),
    new Park('Patty\'s Park', 1976, 1800, 10268985790),
    new Park('Ray\'s Park', 1806, 6000, 107297970)
];

const allStreets = [
    new Street('Antoine\'s Street', 2001, 2.4, 1),
    new Street('Aimée\'s Street', 1999, 5, 5),
    new Street('Patty\'s Street', 1730, 0.3),
    new Street('Ray\'s Street', 1990, 1.3, 2)
];

reporter();