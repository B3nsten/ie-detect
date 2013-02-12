(function() {
	// get ie version return undefined for no ie
	// https://gist.github.com/padolsey/527683
	var ie = (function(){
		var undef, version = 3, element = document.createElement('div'), test = element.getElementsByTagName('i');
		while(element.innerHTML = '<!--[if gt IE ' + (++version) + ']><i></i><![endif]-->', test[0]);
		return version > 4 ? version : undef;
	}());

	var trim = function(str){
		return str.replace(/^\s+|\s+$/g, '');
	};

	var clean = function(str){
		return trim(str.replace(/\s+/g, ' '));
	};

	var search = document.getElementsByTagName('html');

	// no html tag
	if( ! search.length) return;

	var html = search[0], classname = (ie) ? 'ie' + ie : 'no-ie',
		classes = (html.className.length) ? clean(html.className).split(' ') : [];

	// remove no-js
	for(var i = 0; i < s.length; i += 1) if(s[i] == 'no-js') s.splice(i, 1); break;

	// add ie
	classes.push(classname);

	// set body class names
	html.className = classes.join(' ');
}());
