window.onload = function(){
	// var url = "https://raw.githubusercontent.com/bethrobson/Head-First-HTML5/master/chapter6/sales.json"; 
    var url = "https://raw.githubusercontent.com/kueikuei/JSONP/master/testJson.json";
	var request = new XMLHttpRequest();
	request.open("GET",url);
	request.onload = function(){
		if(request.status==200){
			alert("Data received!");
		}
	request.send(null);
	}
}