/*Name this external file gallery.js*/
const imagelist = document.querySelectorAll('.preview')
console.log(imagelist)
imagelist.forEach((image,index) => {image.setAttribute('tabindex', index+1)})
function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
        let el = document.querySelector('.goo');
        el.style.backgroundImage = 'url(' + previewPic.src +')';
        el.textContent = previewPic.alt;

       }
   
function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
       let el = document.querySelector('.goo');
       el.style.backgroundImage = "url('')";
       el.textContent = 'Hover over an image below to display here.';
       
       }
imagelist.forEach(image => {image.addEventListener('focus', upDate)})
imagelist.forEach(image => {image.addEventListener('blur', unDo)})