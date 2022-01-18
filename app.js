let notify = document.querySelector('.notify')

let albums = document.querySelectorAll('.album')

let itemsTotal = document.querySelector('.items-total')

let savebutton = document.querySelector('.button') 

let albumsSelected = []

let i = 0

while(i < albums.length){
    albums[i].onclick = function (e) {
        let albumTitle = this.querySelector('.title').textContent
        
        if(this.classList.contains('selected') !== true){
            this.classList.add('selected')
            albumsSelected.push(albumTitle)
        } else {
            this.classList.remove('selected')
            albumsSelected = albumsSelected.filter(function(item){
                return item !== albumTitle
            })
        }
        console.log(albumsSelected)
    }

    i++
}

savebutton.onclick = function () {
    itemsTotal.textContent = albumsSelected.length + ' item(s)  saved'
    notify.classList.add('active')

    setTimeout(function(){
        notify.classList.remove('active')
    }, 2000)

    console.log('saved')
}




// click album

// show user selected album by adding class "selected" to album

// create an array and add album title to array

//find total number of albums selected

// save button clicked and show notificatio with total saved items