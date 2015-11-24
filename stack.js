function Stack() {
	var length = 0;
	var top = null;
	
	this.top = function() {
		if (!top) {
			return null;
		} else {
			return top.data;
		}
	}
	
	this.push = function(data) {
		var newTop = new Node(data);
		newTop.next = top;
		top = newTop;
		length++;
	}
	
	this.pop = function() {
		if (length === 0) {
			return null;
		}
		
		var newTop = top.next, data = top.data;
		top = newTop;
		length--;
		return data;
	}
	
	this.length = function() {
		return length;
	}
}

function Node(data) {
	this.data = data;
	this.next;
}

module.exports = Stack;