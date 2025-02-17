const pass=require('generate-password')


const hash=pass.generate({
	length: 10,
	numbers: true,

})
console.log(hash)