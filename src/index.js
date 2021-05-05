console.log('%c HI', 'color: firebrick');


const init = () => {
    //challenge #1
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

    fetch(imgUrl)
    .then(response => response.json())
    .then(json => {

        //adds image elements to the DOM for each image in the array
        const imgContainer = document.getElementById('dog-image-container');

        // console.log(json);
        json.message.forEach(element => {
            const imgTag = document.createElement('img');
            imgTag.src = element; 
            imgContainer.appendChild(imgTag);
        });
    }); //challenge #1


    //challenge #2
    const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

    const list = document.getElementById('dog-breeds');

    fetch(breedUrl)
    .then(response => response.json())
    .then(json => {
        //adds the breeds to the page in the <ul> provided in index.html
        // console.log(json.message);
        const breeds = json.message;
        
        //create li for each object key
        for(const key in breeds) {
            const listItem = document.createElement('li');
            listItem.innerText = key;
            list.appendChild(listItem);

            //if there are sub-breeds add sub-list item
            if (breeds[key].length !== 0) {
                const subList = document.createElement('ul');

                breeds[key].forEach(element => {
                    //console.log(element);
                    const subListItem = document.createElement('li');
                    subListItem.innerText = `${element} ${key}`;

                    subList.appendChild(subListItem);

                    listItem.appendChild(subList);
                }); //forEach

            } //if statement
            
        } //for in
        

    }) //challenge #2


    //challenge #3
    //Once all of the breeds are rendered in the <ul>, add JavaScript so that, when the user clicks on any one of the <li>s, the font color of that <li> changes. This can be a color of your choosing.
    list.addEventListener('click', (e) => {
        console.log(e.target);

        e.target.style.color = "green";
    })









} //init






document.addEventListener('DOMContentLoaded', init);