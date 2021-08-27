const user = {
    id: 11, 
    name: 'Gorib Amir', 
    job: 'Actor',
    profit: 453434,
    product: ['Laptop', 'Mobile', 'Pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'Actor',
    },
    isExpensive: true,
};


console.log(user);

const shopstringfied = JSON.stringify(user);
console.log(shopstringfied);

const converted = JSON.parse(shopstringfied);
console.log(converted);

