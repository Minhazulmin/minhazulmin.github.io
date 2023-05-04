/** Variables */
let files = [],
button = document.querySelector('.top button'),
form = document.querySelector('.form'),
container = document.querySelector('.container');
text = document.querySelector('.inner'),
browse = document.querySelector('.select');
input = document.querySelector('form input'); 

/** CLICK LISTENER */
browse.addEventListener('click', () => input.click());


/* INPUT CHANGE EVENT */
input.addEventListener('change', () => {
	let file = input.files;
        
        // if user select more than 1 image or no image
      for(let i = 0; i < file.length; i++){
        if(files.every(e => e.name !== file[i].name)) 
        {
            files.push(file[i]);
        }
      }
    // form.reset();
	showImages();
});

/* SHOW IMAGES */
function showImages() {
   let images = ''
   files.forEach((e,i)=> {
       images +=`<div class="image">
    		<img src="${URL.createObjectURL(e)}" alt="image">
    		<span onclick="delImage(${i})">&times;</span>
    	</div>`;
    });
    container.innerHTML = images;
}
/* DELETE IMAGE */
function delImage(index) {
   files.splice(index, 1);
   showImages();
}
// /* DRAG & DROP */
 
form.addEventListener('dragover', (e) => {
	e.preventDefault()
	form.classList.add('dragover')
    text.innerHTML = "Drop images Here..."
});
 


// /* DRAG LEAVE */
 
form.addEventListener('dragleave', (e) => {
	e.preventDefault()
	dragArea.classList.remove('dragover')
    text.innerHTML = 'Drag & drop image here or <span class="select" >Browse</span>'
});
 
// /* DROP EVENT */
form.addEventListener('drop', e => {
	e.preventDefault()
    dragArea.classList.remove('dragover');

	let file = e.dataTransfer.files;
	for (let i = 0; i < file.length; i++) {
		/** Check selected file is image */
		if (file[i].type.split("/")[0] != 'image') continue;
		
		if (!files.some(e => e.name == file[i].name)) files.push(file[i])
	}
	showImages();
});

// input.addEventListener('change', () => {
// 	let file = input.files;
        
//         // if user select more than 1 image or no image
//         if (file.length > 1 || file.length == 0) return;
         
//         files.push(file[0]);
//         input.files = null;
//         container.innerHTML = `<div class="image">
//     		<img src="${URL.createObjectURL(file[0])}" alt="image">
//     		<span onclick="delImage(0)">&times;</span>
//     	</div>`;
// });

// /* INPUT CHANGE EVENT */
// input.addEventListener('change', () => {
// 	let file = input.files;
        
//         // if user select no image
//         if (file.length == 0) return;
         
// 	for(let i = 0; i < file.length; i++) {
//             if (file[i].type.split("/")[0] != 'image') continue;
//             if (!files.some(e => e.name == file[i].name)) files.push(file[i])
//         }

//     input.files = null;
// 	showImages();
// })




