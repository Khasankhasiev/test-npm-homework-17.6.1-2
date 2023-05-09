import { definePrime } from "../../utils/definePrime.js";

xdescribe('test for definePrime function', () => {
    const simple = 17;
    const complex = 18;
    it ("should operate correctly with simply number", ()=> {
        expect (definePrime(simple)).toBe(`Число ${simple} - простое число`)
    }),
    it ("should operate correctly with complex number", ()=> {
        expect (definePrime(complex)).toBe(`Число ${complex} - составное число`)
    }),
    it ("should operate correctly with invalid number", ()=> {
        expect (definePrime(1001)).toBe("Данные неверны")
    })
});

describe('test for definePrime function', () => {
    const simple = 17;
    const complex = 18;
    it ("should operate correctly with simply, complex and invalid number", ()=> {
        expect (definePrime(simple)).toBe(`Число ${simple} - простое число`)
    
        expect (definePrime(complex)).toBe(`Число ${complex} - составное число`)
    
        expect (definePrime(1001)).toBe("Данные неверны")
    })
})