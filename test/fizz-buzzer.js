const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer.js');


describe('fizzBuzzer', function() {
	it('If number is / by 15 return fizz-buzz, id / 5 return buzz, if / 3 return fizz, otherwise return the number', function() {
		const cases = [
			{input: 15, expected: 'fizz-buzz'},
			{input: 30, expected: 'fizz-buzz'},
			{input: 45, expected: 'fizz-buzz'},
			{input: 5, expected: 'buzz'},
			{input: 10, expected: 'buzz'},
			{input: 20, expected: 'buzz'},
			{input: 3, expected: 'fizz'},
			{input: 6, expected: 'fizz'},
			{input: 9, expected: 'fizz'},
			{input: 1, expected: 1},
			{input: 2, expected: 2}
		];

		cases.forEach( item => {
			const answer = fizzBuzzer(item.input);
			answer.should.equal(item.expected);
		});
	});

	it('Should raise error if input is not a number', function(){
		const badInputs = ['string']; //, true, [], {}
		badInputs.forEach(input => {
			(function(){
				fizzBuzzer(input)
			}).should.throw(Error);
		});
	});
})
