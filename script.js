/*const cat = {};

cat.name = "Fred";
cat.nickname = "Flooficus";
cat.age = 5;
cat.isSleeping = true;
cat.favoriteToys = ["spring", "ping pong balls", "bird stuffy"]
cat.pet = function () {
    return "purrrrrrr"; 
}

console.log(cat);
console.log(cat.nickname);
console.log(cat.favoriteToys[2]);
console.log(cat["name"]);*/

const cat = {
    name: "Fred",
    nickname: "Flooficus",
    age: 5,
    isSleeping: true,
    favoriteToys: ["spring", "ping pong balls", "bird stuffy"],
    pet: function () {
        return "purrrrr";
    },
    play: function () {
        this.isSleeping = false;
        return `${this.nickname} is awake and playing!`;
    }
};

cat.isSleeping = false;
cat["color"] = "orange";


console.log(cat.play());