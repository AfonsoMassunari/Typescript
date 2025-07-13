const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
};

//Type alias
type Drink = [string, boolean, number];

// const pepsi: [string, boolean, number] = ['brown', true, 40];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 0];

const carSpecs: [number, number] = [400, 3352];

const carStats = {
    horsepower: 400,
    weight: 3354,
};
