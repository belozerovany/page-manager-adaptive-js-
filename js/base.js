
	function newElement(){
	    var nevP = document.createElement('p'),
		textarea = document.getElementById('textarea').value,
		div = document.createElement('div'),
		arrey = document.querySelector('.post-reviews');
		console.log('nevP',nevP);
		console.log('textarea',textarea);
		console.log('arrey',arrey);
		console.log('div ',div);
		    if(textarea){
		    		nevP.classList.add('post');
					nevP.innerHTML = textarea;				
					console.log('nevP',nevP);
					console.log('div',div);
					div.classList.add('post-reviews__main');
					div.appendChild(nevP);
					arrey.appendChild(div);


				} else {
					alert('You must write something!')
			}
	}

