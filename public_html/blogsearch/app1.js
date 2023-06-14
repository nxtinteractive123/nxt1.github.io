const search = () => {
	const searchbox = document.getElementById("search-item").value.toUpperCase();
	const blogitem = document.getElementById("course-list")
	const blogitem1 = document.querySelectorAll(".zbv-blog-04-post")
	const searchby	= document.getElementsByTagName("h3")
	
	for (var i=0; i< searchby.length; i++){
		let match = blogitem1[i].getElementsByTagName('h3')[0];
		
		if(match){
			let textvalue = match.textContent || match.innerHTML
			
			if(textvalue.toUpperCase().indexOf(searchbox) > -1){
				blogitem1[i].style.display = "";
			}
			else {
				blogitem1[i].style.display = "none";
			}
		}
	}
}