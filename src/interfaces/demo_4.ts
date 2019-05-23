interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: "red",
    area: 123
  };
}

// let mySquare = createSquare({ colour: "red", width: 100 }); // Error
//  Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?

let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig); // OK


// let mySquare = createSquare({ width: 100, name: "niki" }); // Error
//  Object literal may only specify known properties, and 'name' does not exist in type 'SquareConfig'.