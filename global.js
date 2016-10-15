$(document).ready(function(){


		//BASIC EVENT HANDLER

		$(".btn-success").on("mouseover", function(){

			if($("header").hasClass("big")){

				$("#header").removeClass("big")
			}else{
				$("#header").addClass("big")
			}

			$("ul li").each(function(){

				//console.log("loop")

				$(this).css({"color":"red", "font-weight": "bold", "font-size": "30px"

			})

		})

			$("ul li a").css({"font-size":"42px"})

		})

		//JQuery
		$(".btn-primary").on("click", function(){

			var p = $("<p>Welcome</p>")
			p.addClass("red")
			$(".dummy-text").append(p);

		})

		//JS
		// var btn = document.getElementById("cl")

		// btn.addEventListener("click", function(){

		// 	var p = document.createElement("p")
		// 	var text = document.createTextNode("welcome")

		// 	p.appendChild(text)
		// 	p.className = 'red'

		// 	var bigpara = document.getElementById("append")
		// 	bigpara.appendChild(p)

		// })


})




















