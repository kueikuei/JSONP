 window.onload = function(){
	// var url = "https://raw.githubusercontent.com/bethrobson/Head-First-HTML5/master/chapter6/sales.json"; 
    var url = "https://rawgit.com/kueikuei/JSONP/master/testJson.json";
	var request = new XMLHttpRequest();
	request.open("GET",url);
	request.onload = function(){
		if(request.status==200){
			alert("Data received!");
		}
	request.send(null);
	}

	//

}

// window.onload=testJson;

// function testJson(){
// 	// var url = "https://raw.githubusercontent.com/bethrobson/Head-First-HTML5/master/chapter6/sales.json"; 
//     var url = "http://gumball.wickedlysmart.com";
// 	var request = new XMLHttpRequest();
// 	request.open("GET",url);
// 	request.onload = function(){
// 		if(request.status==200){
// 			alert("Data received!");
// 		}
// 	request.send(null);
// 	}
 
// 	//

// }




// function testJson(data){
// 	if(data){
// 		alert("Data received!");
// 	}else{
// 		alert("Null");
// 	}
// }