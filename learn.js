const catFactory = function(name, color, age) {
  return {
    name,
    color,
    age,
    getColor() {
      return color;
    }
  };
};
const cat = catFactory("maiomiao", "yellow", 1);
console.log(cat.color);
