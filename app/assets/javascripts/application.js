// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .
// function loadComments(){

// $.getJSON( "/comments.json", function( data ) {

// 	var string_html;

// 	$.each(data, function(i, item){
// 		//console.log(data[i]);
// 		//console.log(data[i].comment_text);
		
// 		if (data[i].comment_text != ''){
// 			string_html += data[i].comment_text + '<br>';
// 		}
		
// 	});

// 	$('#comments').html(string_html)
// });
// }

// function convertSeconds(num_seconds){
// 	//1393891200
// 	//var timestamp = num_seconds;
// 	var date = new Date(num_second]*1000);

// 	var year = date.getFullYear();
// 	var month = date.getMonth() + 1;
// 	var day = date.getDate();
	

// 	alert(month + "/" + day + "/" + year);
	
// }