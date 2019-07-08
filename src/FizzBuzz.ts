export default class FizzBuzz {

    public static fizzBuzz = (n: number) => {
        return ((['Fizz'][n % 3] || '') + (['Buzz'][n % 5] || '')) || n;
    }

}
