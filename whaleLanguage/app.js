// This program coverts human language to Whale language!
const input = 'I hate you';


const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

for (let i = 0; i < input.length; i++) {
    let string = input.toLowerCase();
    if (string[i] !== ' ') {
        for (let j = 0; j < vowels.length; j++) {
            if (string[i] === vowels[j]) {
                if (string[i] === 'e' || string[i] === 'u') {
                    resultArray.push(string[i].toUpperCase().repeat(2));
                } else resultArray.push(string[i].toUpperCase());
            }
        }
    }
}

console.log(resultArray.join(""));

