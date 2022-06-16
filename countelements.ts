function CountElements(numbers: number[] = [], value: number): number {
    let i =0;
    let count = 0;
    while(i < numbers.length) {
        if(numbers[i] === value){
            count++;
        }
        i++
    }
    return count;
}
let numbers = [1,2,4,4,5,6,7,4,8,4,4]
let countElements = CountElements(numbers,4)
console.log(countElements);
