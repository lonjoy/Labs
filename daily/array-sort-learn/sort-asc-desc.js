if(!Array.prototype.ascSort) {

	Array.prototype.ascSort = function () {

		var asc = function(a,b) {
			if(a < b) {
		        return -1;
		    } else if(a > b) {
		        return 1;
		    } else {
		        return 0;
		    }
		};

		return this.sort(asc);

	};

}

if(!Array.prototype.descSort) {

	Array.prototype.descSort = function() {

		var desc = function(a,b) {
			if(a < b) {
		        return 1;
		    } else if(a > b) {
		        return -1;
		    } else {
		        return 0;
		    }
		};

		return this.sort(desc);

	};

}