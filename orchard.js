///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the last week at an apple orchard. 
    You will be using your coding skills to gain insights into its daily 
    operations.

    Below are three arrays each containing 7 numbers. You will use them and the 
    price variables to complete the problems in this file.

    The indexes of the arrays correspond with a day of the week.
    The first array is named fujiAcres. Notice that the first item in this array 
    is 2, meaning that 2 acres of Fuji apples were picked on Monday of this week.
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]





// PROBLEM 1

/*
    Using a for loop, calculate the total number of acres picked for the entire 
    week.

    Save the number to a variable called `totalAcres`.
    Log `totalAcres` to the console.
*/

// CODE HERE
let totalAcres = 0;
totalAcresList = fujiAcres.concat(galaAcres).concat(pinkAcres);
for (let i = 0; i < totalAcresList.length; i++){
    totalAcres += i;
}
console.log("total acres picked from 3 farms during the week is " + totalAcres);

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    (Remember that the average is the total divided by the number of days)

    Save the answer to a variable called 
    `averageDailyAcres`, and log `averageDailyAcres` to the console.
*/

// CODE HERE
const averageDailyAcres = totalAcres / 7;
console.log('Average number of acres picked per day is ' + averageDailyAcres);




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number of acres that still have apples left. 
    
    The `days` variable represents how many more days of work are left. It's 
    initialized at 0 because we're going to be using it as a counter.
    
    Write a while loop that will continue to run while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to calculate this number. You might
    think about other ways you could do it more mathematically.
*/

let acresLeft = 174 
let days = 0

// CODE HERE
while (acresLeft > 0){
    days += 1;
    acresLeft -= 30;
}
console.log('Number of days left until acresLeft is 0 would be ' + days);


// PROBLEM 4

/*
    Your next task is to create 3 arrays that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store your new arrays. Make sure that you
    don't modify the original arrays on lines 36 - 38.

    Log each of your arrays to the console.

    (Hint: loop over the original arrays, calculate the tons for that day, then
    add that number into the new list)
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];
for (let i = 0; i < fujiAcres.length; i++){
    fujiTons.push(fujiAcres[i] * 6.5);
}
for (let j = 0; j < galaAcres.length; j++){
    galaTons.push(galaAcres[j] * 6.5);
}
for (let k = 0; k < pinkAcres.length; k++){
    pinkTons.push(pinkAcres[k] * 6.5);
}
console.log('fujiTons is ' + fujiTons);
console.log('galaTons is ' + galaTons);
console.log('pinkTons is ' + pinkTons);

// PROBLEM 5

/*
    Next, calculate the TOTAL number of pounds picked per variety.

    You'll need to add up the tons per each variety and convert the number 
    into pounds -- store that number in the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE
 fujiTotalPounds = 0;
 for (let i = 0; i < fujiTons.length; i++){
    fujiTotalPounds += fujiTons[i] * 2000;
 }
 console.log('Fuji apples picked is ' + fujiTotalPounds + " pounds");

 galaTotalPounds = 0;
 for (let i = 0; i < galaTons.length; i++){
    galaTotalPounds += galaTons[i] * 2000;
 }
 console.log('Gala apples picked is ' + galaTotalPounds + " pounds");

 pinkTotalPounds = 0;
 for (let i = 0; i < pinkTons.length; i++){
    pinkTotalPounds += pinkTons[i] * 2000;
 }
 console.log('Pick apples picked is ' + pinkTotalPounds + " pounds");

// PROBLEM 6

/*
    Now that you know the total pounds per variety, use the prices below to 
    figure out how much you'll make from selling each type of apple. 

    The prices are per pound and are written in cents. 

    Log each of the profits to the console. 
*/
const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55

// CODE HERE

let fujiProfit = fujiTotalPounds * fujiPrice;
let galaProfit = galaTotalPounds * galaPrice;
let pinkProfit = pinkTotalPounds * pinkPrice;
console.log(`We make ${fujiProfit} cents from selling fuji apples, make ${galaProfit} cents from selling gala apples, make ${pinkProfit} cents from selling pink apples`);

// PROBLEM 7

/*
    Add up all your profits and save  the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
const totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log('Total profit is ' + totalProfit + " cents");
