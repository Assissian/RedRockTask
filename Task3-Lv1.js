let obj1 = new Object();
obj1.name = 'Billy';
obj1.age = 18;
obj1.gender = 'male';

let obj2 = new Object();
for(key in obj1) {
    obj2[key] = obj1[key];
}

let obj3 = {
    name: obj1.name,
    age: obj1.age,
    gender: obj1.gender
}

let obj = [];
obj.push(obj1, obj2, obj3);
console.table(obj);