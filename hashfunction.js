let hash= module.exports= function(obj) {
	let str = JSON.stringify(obj);
	let a = 101;
	let n = Math.pow(2, 32);
	let k = str.length;
	let running_a = Math.pow(a, k);

	let result = 0;
	for (let i = 0; i<k; i++){
		running_a = running_a/a;
		let c = str.charCodeAt(i);
		result += c * running_a;
		result = result %n;
	}
	return result;
}