
//ESSENTIAL TYPES AND ANNOTATIONS EXERCISES


//Exercise 1: Bsic Types with Function Parameters
export const add = (a: number, b: number) => {
    return a + b;
  };
  
  //Exercise 2: Annotating empty parameters
  const concatTwoStrings = (a: string, b: string) => {
    return [a, b].join(" ");
  };
  
  //Exercise 3: Basic types
  export let example1: string = "Hello World!";
  export let example2: number = 42;
  export let example3: boolean = true;
  export let example4: symbol = Symbol();
  export let example5: bigint = 123n;
  
  //Exercise 4: Any type
  const handleFormData = (e: any) => {
    e.preventDefault();
  
    const data = new FormData(e.target);
  
    const value = Object.fromEntries(data.entries());
  
    return value;
  };
  
  
  
  
  //UNIONS, LITERALS AND NARROWING
  //Exercise 1: String or Null
  function getUsername(username: string | null) {
    if (username !== null) {
      return `User: ${username}`;
    } else {
      return 'Guest';
    }
  }
  
  const result = getUsername('Alice');
  type test = Expect<Equal<typeof result, string>>;
  
  const result2 = getUsername(null);
  type test2 = Expect<Equal<typeof result2, string>>;
  
  
  //Exercise 2: Restricting Function Parameters
  function move(direction: 'up' | 'down' | 'left' | 'right', distance: number) {
    
  }
  
  
  //OBJECTS
  
  //Exercise 1: Create an Intersection Type
  type BaseEntity = {
    id: string;
    createdAt: Date;
  };
  
  
  type User = BaseEntity & {
    name: string;
    email: string;
  };
  
  type Product = BaseEntity & {
    name: string;
    price: number;
  };
  
  //Extending Interfaces
  // BaseEntity interface with id and createdAt
  interface BaseEntity {
    id: string;
    createdAt: Date;
  }
  
  // Separate interfaces for shared and specific properties
  interface Nameable {
    name: string;
  }
  
  interface Contactable {
    email: string;
  }
  
  interface Pricable {
    price: number;
  }
  
  // User interface extends BaseEntity, Nameable, and Contactable
  interface User extends BaseEntity, Nameable, Contactable {}
  
  // Product interface extends BaseEntity and Nameable, and adds Pricable
  interface Product extends BaseEntity, Nameable, Pricable {}
  
  
  
  //Exercise 1: Using an index signature for dynamic keys
  //Inline index signature
  const scores: { [key: string]: number } = {};
  
  scores.math = 95;
  scores.english = 90;
  scores.science = 85;
  
  //Using a type
  type Scores = { [key: string]: number };
  
  const scores: Scores = {};
  
  scores.math = 95;
  scores.english = 90;
  scores.science = 85;
  
  
  //Using an Interface
  interface Scores {
    [key: string]: number;
  }
  
  const scores: Scores = {};
  
  scores.math = 95;
  scores.english = 90;
  scores.science = 85;
  
  
  //Exercise 2: Default Properties with Dynamic Keys
  interface RequiredScores {
    math: number;
    english: number;
    science: number;
  }
  
  
  interface Scores extends RequiredScores {
    [key: string]: number; 
  }
  
  
  const scores: Scores = {
    math: 95,
    english: 90,
    
  };
  
  scores.athletics = 100; 
  scores.french = 75;     
  scores.spanish = 70;    
  