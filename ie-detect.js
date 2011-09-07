(function() {
	// get ie version return undefined for no ie
	var ie = (function(){
		var u, v = 3, d = document.createElement('div'), a = d.getElementsByTagName('i');
		while (d.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', a[0]);
		return v > 4 ? v : u;
	}());

	var $trim = function(str){
		return str.replace(/^\s+|\s+$/g, '');
	};

	var $clean = function(str){
		return $trim(str.replace(/\s+/g, ' '));
	};

	var b = document.getElementsByTagName('html')[0],
		c = (ie) ? 'ie' + ie : 'no-ie',
		s = (b.className.length) ? $clean(b.className).split(' ') : [];

	// no body tag
	if(b === undefined) {
		return;
	}

	// no class names
	if(!s.length) {
		b.className = c;
		return;
	}

	// remove no-js
	for(var i = 0; i < s.length; i += 1) {
		if(s[i] == 'no-js') {
			s.splice(i, 1);
			break;
		}
	}

	// add ie
	s.push(c);

	// set body class names
	b.className = s.join(' ');
}());
