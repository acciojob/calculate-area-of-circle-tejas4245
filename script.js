//your JS code here. If required.
const radius=prompt("Enter the radius of the circle: ");
const area=Math.PI*radius*radius;
const roundedArea=area.toFixed(2);
console.log(`The area of the circle with radius ${radius} is ${roundedArea}`);