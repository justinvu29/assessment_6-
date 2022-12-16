const {shuffleArray} = require('./utils')


describe('shuffleArray should', () => {
    test('Items shuffled', () => {
        expect(typeof shuffleArray.arrCopy).toEqual('array')
      }) 

      test('Returns array of same length', () => {
        expect(shuffleArray.array.length).toEqual(shuffleArray.arrCopy.length)
    
    })
})