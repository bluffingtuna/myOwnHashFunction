let hash = require('./hashfunction.js');

function HashMap(size) {
	this.data = new Array(size);
	this.add = function(key, value) {
		let keyHash = hash(key) % this.data.length;
		this.data[keyHash] = value;
	};
	this.delete = function(key) {
		let keyHash = hash(key) % this.data.length;
		this.data[keyHash] = null;
	};
	this.get = function(key) {
		let keyHash = hash(key) % this.data.length;
		return this.data[keyHash];
	};

	this.print = function() {
		let root = Math.ceil(Math.sqrt(this.data.length));
		var square = root* root;
		console.log("P2");
		console.log(root + " " + root);
		console.log("2");

		let line = [];
		for (let i = 0; i< square; i++) {
			if (i>= this.data.length) { line.push("1");}
			else if (this.data[i]) {	line.push("0");}
			else {						line.push("2");}

			if (i % root == root-1) {
				console.log(line.join(" "));
				line = [];
			}
		}
	};
}

var hm = new HashMap(1000);

for (let i = 0; i<100; i++) {
	hm.add(Math.random().toString(36).substring(7), i);
}

hm.print();

hm123.print();