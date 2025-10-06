const Isaac = {
firstName: "Isaac",
lastName: "Ng",
graduated: false,
DOB: 2010,
siblings: ["Carrie"],
age: function () {
    return year - this.DOB;
},
};

console.log(Isaac.siblings);

