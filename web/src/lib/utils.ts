


export function generateRandomName(){

    const letters = 'abcd1234567890'.split('')

    let key = ''

    for (let i = 0; i < 6; i++) {
        
        key += letters[Math.floor(Math.random() * letters.length)]
    }

    return key
}