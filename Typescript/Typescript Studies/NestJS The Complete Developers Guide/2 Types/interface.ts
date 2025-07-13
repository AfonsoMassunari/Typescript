interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    },
};

const drink2 = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} gram of sugar`;
    },
};

// const printVehicle = (vehicle: {
//     name: string;
//     year: number;
//     broken: boolean;
// }) => {
//     console.log(`Name: ${vehicle.name}}`);
//     console.log(`Year: ${vehicle.year}`);
//     console.log(`Broken: ${vehicle.broken}`);
// };

const printSummary = (item: Reportable) => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink2);
