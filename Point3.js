const k1 = { fruit: '🥝' };
const k2 = { fruit: '🥝' };

// Using JavaScript
const obj1 = JSON.parse(JSON.stringify(k1))
const obj2 = JSON.parse(JSON.stringify(k2))

console.log( obj1 === k1 );