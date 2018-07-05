const functions = require('./functions')

test('functions testing', () => {
    expect(functions.returnTwo()).toEqual(2);
    expect(functions.greeting('James')).toEqual('Hello, James');
    expect(functions.greeting('Jill')).toEqual('Hello, Jill');
    expect(functions.add(1, 2)).toEqual(3);
    expect(functions.add(5, 9)).toEqual(14);
})

test("returnTwo() should return 2.", () => {
    expect( functions.returnTwo() ).toEqual( 2 );
  });
  

  
test("add() should return a dynamic sum based on two number parameters.", () => {
    expect( functions.add( 1, 2 ) ).toEqual( 3 );
    expect( functions.add( 5, 9 ) ).toEqual( 14 );
  });

test("multiply, divide, subtract testing", () => {
    expect(functions.multiply(2,2)).toEqual(4)
    expect(functions.divide(2,2)).toEqual(1)
    expect(functions.divide(4,2)).toEqual(2)
    expect(functions.divide(12,2)).toEqual(6)
    expect(functions.subtract(2,2)).toEqual(0)
    expect(functions.subtract(4,2)).toEqual(2)
    expect(functions.subtract(6,2)).toEqual(4)
})