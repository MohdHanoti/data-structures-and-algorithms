'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function named screenForNames that takes in an array of strings and uses Regex to create a new array of only those strings that match the following rules:

* the name must begin with Mr., Mrs., Ms., Dr. followed by a space
* the name must contain only letter characters (white spaces are ok)

------------------------------------------------------------------------------------------------ */

const screenForNames = (arr) => {
  // Solution code here...
  let nArr= arr.filter((item)=>{
    return /^\b(Mr.|Mrs.|Ms.|Dr.)\s\w+$/g.test(item);
  })
 return nArr;
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named toTitleCase that takes in an array of strings and returns an array of strings with the first character in upper case and the rest as is.

For example, ['apple', 'banana', 'MacGyver'] returns ['Apple', 'Banana', 'MacGyver'].
------------------------------------------------------------------------------------------------ */

const toTitleCase = (arr) => {
  // Solution code here...
  let newarr=[];
  for (let i=0;i<arr.length;i++){
    let newstr=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    newarr.push(newstr);
  }
  return newarr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named biggerThanLuke that, given the Star Wars data, below, returns the names of the characters whose mass is greater than Luke's.

The names should be combined into a single string with each character name separated by a dash.

For example, "Lando Calrisian - Boba Fett - Princess Amidala".
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'
},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
},
{
  name: 'Pex Kylar',
  height: '180',
  mass: '190',
  hair_color: 'orange',
  skin_color: 'brown',
  eye_color: 'none',
  birth_year: '27BBY',
  gender: 'n/a'
}];


let biggerThanLuke = (arr) => {
  // Solution code here...
  if(arr.length===0){
    let non='';
    return non;
  }
  let newarr='';
  for (let i=0;i<arr.length;i++){

    if (parseInt(arr[i].mass)>parseInt(arr[0].mass)){
      newarr = newarr +' - '+ arr[i].name;


    }

    newarr = newarr.substring(1);

  }

  return newarr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named sortBy that takes in an array of objects, each of which has a particular property, and sorts those objects by that property, lowest to highest, returning the same array.

Here is an example of the input:
[
  {name: 'Sweatshirt', price: 45},
  {name: 'Bookmark', price: 2.50},
  {name: 'Tote bag', price: 15}
];

This data could be sorted by name or price.
------------------------------------------------------------------------------------------------ */

starWarsData=[
  { name: 'Sweatshirt', price: 45 },
  { name: 'Bookmark', price: 2.50 },
  { name: 'Tote bag', price: 15 }
]

const sortBy = (property, arr) => {
// Solution code here...

  if (property==='price'){
    arr.sort((a, b) => {
      return a.price - b.price;
    });

  }
  else{
    arr.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }
  return arr;
};



/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function that determines if a given URL is secure, beginning with https://

Guard against malformed URLs, such as: https:missing-slashes.bad

For example:
http://www.insecure.com returns false because the URL is not secure
https://secure.com returns true because the URL is secure
https:/missingslash.org returns false because the URL is malformed
------------------------------------------------------------------------------------------------ */
const isSecure = (url) => {
  // Solution code here...

  let tested1=/^https\:\/\//;
  let tested2=/^http\:\/\//;


    if(tested1.test(url)){
       return true;
}
  else if(tested2.test(url)){
    return false;
  }
  else return false;

}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named detectTicTacToeWin that accepts a two-dimensional array of strings. Each string is guaranteed to be either "X", "O" or an empty string. Your function should check to see if any row, column, or either diagonal direction has three matching "X" or "O" symbols (non-empty strings), three-in-a-line.

This function should return either true or false to indicate if someone won the game.

Instead of trying to write crazy for loops to automate checking the rows, columns and diagonals consider writing one helper function that accepts three coordinate pairs and checks the values of the array at those locations. For instance helpCheck(row1, col1, row2, col2, row3, col3).

Your function does not need to work for boards of any size other than 3x3.

Here is a sample board:
[
  ['X', '', 'O'],
  ['X', 'O', ''],
  ['X', 'O', 'X'],
];
------------------------------------------------------------------------------------------------ */

const detectTicTacToeWin = (board) => {
  // Solution code here...
  let raw1=board[0];
    let raw2=board[1];
    let raw3=board[2];

  let col1=[raw1[0],raw2[0],raw3[0]];
  let col2=[raw1[1],raw2[1],raw3[1]];
  let col3=[raw1[2],raw2[2],raw3[2]];

  let diag1=[raw1[0],raw2[1],raw3[2]];
  let diag2=[raw1[2],raw2[1],raw3[0]];
  if ((diag1[0]==diag1[1]&&diag1[0]==diag1[2]&&diag1[0]=='')||(diag2[0]==diag2[1]&&diag2[0]==diag2[2]&&diag2[0]=='')||(col1[0]==col1[1]&&col1[0]==col1[2]&&col1[0]=='')||(col2[0]==col2[1]&&col2[0]==col2[2]&&col2[0]=='')||
     (col3[0]==col3[1]&&col3[0]==col3[2]&&col3[0]=='')||
     (raw1[0]==raw1[1]&&raw1[0]==raw1[2]&&raw1[0]=='')||
     (raw2[0]==raw2[1]&&raw2[0]==raw2[2]&&raw2[0]=='')||
     (raw3[0]==raw3[1]&&raw3[0]==raw3[2]&&raw3[0]=='')){
    return false
     }

  if(diag1[0]==diag1[1] && diag1[0]==diag1[2]){
    return true;
  }
  else if(col1[0]==col1[1]&&col1[0]==col1[2]){


    return true
  }
   else if(col1[0]==col1[1]&&col1[0]==col1[2]){


    return true
   }
else if(col2[0]==col2[1]&&col2[0]==col2[2]){


    return true
   }
  else if(col3[0]==col3[1]&&col3[0]==col3[2]){


    return true
   }
else if(raw1[0]==raw1[1]&&raw1[0]==raw1[2]){


    return true
   }
  else if(raw2[0]==raw2[1]&&raw2[0]==raw2[2]){


    return true
   }
  else if(raw3[0]==raw3[1]&&raw3[0]==raw3[2]){


    return true
   }
  else return false;

};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenge-14.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return a list of names', () => {
    const names = ['Mr. Brown', ' Ms. Red', 'Dr. Blue', 'Mrs.', '', 'Ms. Black', 'dr. Green', 'Mrs. Orange', 'Purple', 'Mr.  Pink'];
    expect(screenForNames(names)).toStrictEqual(['Mr. Brown', 'Dr. Blue', 'Ms. Black', 'Mrs. Orange']);
  });
});

describe('Testing challenge 2', () => {
  test('It should convert each word to title case', () => {
    const words = ['apple', 'banana', 'MacGyver'];
    expect(toTitleCase(words)).toStrictEqual(['Apple', 'Banana', 'MacGyver']);

    expect(toTitleCase([])).toStrictEqual([]);
  });
});

describe('Testing challenge 3', () => {
  test('It should return only characters that are bigger than Luke', () => {
    expect(biggerThanLuke(starWarsData)).toStrictEqual('Darth Vader - Pex Kylar');
    expect(biggerThanLuke([])).toStrictEqual('');
  });
});

describe('Testing challenge 4', () => {
  test('It should sort items by a price', () => {

    expect(sortBy('price', [
      { name: 'Sweatshirt', price: 45 },
      { name: 'Bookmark', price: 2.50 },
      { name: 'Tote bag', price: 15 }
    ])).toStrictEqual([
      { name: 'Bookmark', price: 2.50 },
      { name: 'Tote bag', price: 15 },
      { name: 'Sweatshirt', price: 45 },
    ]);

  });

  test('It should sort items by name', () => {

    expect(sortBy('name', [
      { name: 'Sweatshirt', price: 45 },
      { name: 'Bookmark', price: 2.50 },
      { name: 'Tote bag', price: 15 }
    ])).toStrictEqual([
      { name: 'Bookmark', price: 2.50 },
      { name: 'Sweatshirt', price: 45 },
      { name: 'Tote bag', price: 15 },
    ]);
  });
});

describe('Testing challenge 5', () => {
  test('It should check if url is https', () => {

    expect(isSecure('http://www.insecure.com')).toBe(false);
    expect(isSecure('https://secure.com')).toBe(true);
    expect(isSecure('https:/missingslash.org')).toBe(false);
  });
});

describe('Testing challenge 6', () => {
  test('It should return true if there are three in a row', () => {
    expect(detectTicTacToeWin([['X', '', 'O'], ['X', 'O', ''], ['X', 'O', 'X']])).toStrictEqual(true);
    expect(detectTicTacToeWin([['O', '', 'X'], ['X', 'O', 'X'], ['X', '', 'O']])).toStrictEqual(true);
  });

  test('It should return false if there are not three in a row', () => {
    expect(detectTicTacToeWin([['X', '', 'O'], ['O', 'O', ''], ['X', 'O', 'X']])).toStrictEqual(false);
  });

  test('It should not treat empty 3 in row as winner', () => {
    expect(detectTicTacToeWin([['', '', ''], ['O', 'O', ''], ['X', 'O', 'X']])).toEqual(false);
  });
});
