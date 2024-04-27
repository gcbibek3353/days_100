// write a function called checkTriangleType that takes three parameters representing the lengths of sides of triangle.The function should return a string indicating type of triangle "equilateral","isosceles" or "scalane"

const checkTriangleType = (a,b,c)=>{
    if(a===b && a===c) return "equilateral";
    else if((a===b && a!==c) || (b===c && b!==a) || (a===c && a!==b)) return "isosceles"  
    else if(a!==b && a!==c) return "scalane"
}

console.log(`Given triangle is a ${checkTriangleType(2,2,4)} Triangle`);