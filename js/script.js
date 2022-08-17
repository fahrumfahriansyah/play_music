function data(obj) {
    return /*html*/`
    <div class="row g-0">
        <div class="col-sm-12 col-md-12">
            <div class="card " style="background-image: url(./data/img/bgc.jpg);">
                <div class="imgutama" style="background-color: white; margin: 0px auto;">
                    <img src=${obj.img} class="img-fluid ms-5" alt="gambar tidak ada" width="80%">
                    <h5 class="card-title mt-3 ms-5 mb-3">${obj.nama}</h5>
                    <div class="play mb-4">

                    </div>
                    <div class="list">
                     <ul class="list-group text-center ">
                        <li class="list-group-item"><button class="tombol2"
                                style="border: 0px solid black;background-color:white;">${obj.lagu1}</button></li>
                        <li class="list-group-item"><button class="tombol2"
                                style="border: 0px solid black;background-color:white;">${obj.lagu2}</button></li>
                        <li class="list-group-item"><button class="tombol2"
                                style="border: 0px solid black;background-color:white;">${obj.lagu3}</button></li>
                                <a href="index.html" class="btn btn-danger mt-5">kembali</a>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
    </div>

    </div>`
}
function objectData(nama, lagu1, lagu2, lagu3, img, lagu) {
    const obj = {
        nama: nama, lagu1: lagu1, lagu2: lagu2, lagu3: lagu3, img: img, lagu: lagu
    }
    return obj
}


const album = document.querySelectorAll('.album')
const article1 = document.querySelector('.article1')

album[0].addEventListener('click', function () {
    const obj = objectData('The_Beatles', 'hey-Jude', 'imagine', 'yesterday', "data/img/the_beatles2.jpg")
    article1.innerHTML = data(obj)
    const music = document.querySelector('.play')
    const tombol2 = document.querySelectorAll('.tombol2')
    tombol2[0].addEventListener('click', function () {
        music.innerHTML = `<h6 class="card-title mt-3 ms-5 mb-3">${obj.lagu1}</h6>
        <audio controls autoplay class="ms-5" >
         <source src="./data/audio/the_beatles/hey_jude.mp3" type="audio/mp3">
     </audio>`
    })
    tombol2[1].addEventListener('click', function () {
        music.innerHTML = `<h6 class="card-title mt-3 ms-5 mb-3">${obj.lagu2}</h6>
        <audio controls autoplay class="ms-5" >
         <source src="./data/audio/the_beatles/imagine.mp3" type="audio/mp3">
     </audio>`
    })
    tombol2[2].addEventListener('click', function () {
        music.innerHTML = `<h6 class="card-title mt-3 ms-5 mb-3">${obj.lagu2}</h6>
        <audio controls autoplay class="ms-5" >
         <source src="./data/audio/the_beatles/yesterday.mp3" type="audio/mp3">
     </audio>`
    })
})
album[1].addEventListener('click', function () {
    const obj = objectData('Slank', 'Koepoe-Liarku', 'Orkes-Sakit-Hati', 'Lembah-Baliem', "data/img/slank2.jpg")
    article1.innerHTML = data(obj)
    const music = document.querySelector('.play')
    const tombol2 = document.querySelectorAll('.tombol2')
    tombol2[0].addEventListener('click', function () {
        music.innerHTML = `<h6 class="card-title mt-3 ms-5 mb-3">${obj.lagu1}</h6>
        <audio controls autoplay class="ms-5" >
         <source src="./data/audio/slank/Koepoe-Liarkoe.mp3" type="audio/mp3">
     </audio>`
    })
    tombol2[1].addEventListener('click', function () {
        music.innerHTML = `<h6 class="card-title mt-3 ms-5 mb-3">${obj.lagu2}</h6>
        <audio controls autoplay class="ms-5" >
         <source src="./data/audio/slank/Orkes-Sakit-Hati.mp3" type="audio/mp3">
     </audio>`
    })
    tombol2[2].addEventListener('click', function () {
        music.innerHTML = `<h6 class="card-title mt-3 ms-5 mb-3">${obj.lagu2}</h6>
        <audio controls autoplay class="ms-5" >
         <source src="./data/audio/slank/Lembah-Baliem.mp3" type="audio/mp3">
     </audio>`
    })
})
album[2].addEventListener('click', function () {
    const obj = objectData('Queen', 'Crazy-Little-Things', 'Love-of-My-Life', 'We-Are-The-Champion', "data/img/qu.jpg")
    article1.innerHTML = data(obj)
    const music = document.querySelector('.play')
    const tombol2 = document.querySelectorAll('.tombol2')
    tombol2[0].addEventListener('click', function () {
        music.innerHTML = `<h6 class="card-title mt-3 ms-5 mb-3">${obj.lagu1}</h6>
        <audio controls autoplay class="ms-5" >
         <source src="./data/audio/quen/Crazy-Little-Thing-Called-Love.mp3" type="audio/mp3">
     </audio>
     `
    })
    tombol2[1].addEventListener('click', function () {
        music.innerHTML = `<h6 class="card-title mt-3 ms-5 mb-3">${obj.lagu2}</h6>
        <audio controls autoplay class="ms-5" >
         <source src="./data/audio/quen/Love-of-My-Life.mp3" type="audio/mp3">
     </audio>`
    })
    tombol2[2].addEventListener('click', function () {
        music.innerHTML = `<h6 class="card-title mt-3 ms-5 mb-3">${obj.lagu2}</h6>
        <audio controls autoplay class="ms-5" >
         <source src="./data/audio/quen/We-Are-The-Champions.mp3" type="audio/mp3">
     </audio>`
    })
})

function setel(obj) {
    return `<h6 class="card-title mt-3 ms-5 mb-3">${obj.lagu2}</h6>
        <audio controls autoplay class="ms-5" >
         <source src=${obj.lagu} type="audio/mp3">
     </audio>`
}
const values = document.querySelector('.valuenya')
const tombol3 = document.querySelector('.tombol3')
tombol3.addEventListener('click', function (a) {
    if (values.value === 'thebeatles' || values.value === 'the beatles' || values.value === 'The Beatles') {
        const obj = objectData('The_Beatles', 'hey-Jude', 'imagine', 'yesterday', "data/img/the_beatles2.jpg")
        article1.innerHTML = data(obj)
        a.preventDefault()
        const music = document.querySelector('.play')
        const tombol2 = document.querySelectorAll('.tombol2')
        tombol2[0].addEventListener('click', function () {
            const obj = objectData('The_Beatles', 'hey-Jude', 'imagine', 'yesterday', "data/img/the_beatles2.jpg", "./data/audio/the_beatles/hey_jude.mp3")
            music.innerHTML = setel(obj)
        })
        tombol2[1].addEventListener('click', function () {
            const obj = objectData('The_Beatles', 'hey-Jude', 'imagine', 'yesterday', "data/img/the_beatles2.jpg", "./data/audio/the_beatles/imagine.mp3")
            music.innerHTML = setel(obj)
        })
        tombol2[2].addEventListener('click', function () {
            const obj = objectData('The_Beatles', 'hey-Jude', 'imagine', 'yesterday', "data/img/the_beatles2.jpg", "./data/audio/the_beatles/yesterday.mp3")
            music.innerHTML = setel(obj)
        })
    } else if (values.value === 'queen' || values.value === 'Queen' || values.value === 'quen' || values.value === 'Quen') {
        const obj = objectData('Queen', 'Crazy-Little-Things', 'Love-of-My-Life', 'We-Are-The-Champion', "data/img/qu.jpg")
        article1.innerHTML = data(obj)
        a.preventDefault()
        const music = document.querySelector('.play')
        const tombol2 = document.querySelectorAll('.tombol2')
        tombol2[0].addEventListener('click', function () {
            const obj = objectData('Queen', 'Crazy-Little-Things', 'Love-of-My-Life', 'We-Are-The-Champion', "data/img/qu.jpg", "./data/audio/quen/Crazy-Little-Thing-Called-Love.mp3")
            music.innerHTML = setel(obj)
        })
        tombol2[1].addEventListener('click', function () {
            const obj = objectData('Queen', 'Crazy-Little-Things', 'Love-of-My-Life', 'We-Are-The-Champion', "data/img/qu.jpg", "./data/audio/quen/Love-of-My-Life.mp3")
            music.innerHTML = setel(obj)
        })
        tombol2[2].addEventListener('click', function () {
            const obj = objectData('Queen', 'Crazy-Little-Things', 'Love-of-My-Life', 'We-Are-The-Champion', "data/img/qu.jpg", "./data/audio/quen/We-Are-The-Champions.mp3")
            music.innerHTML = setel(obj)
        })



    } else if (values.value === 'slank' || values.value === 'Slank' || values.value === 'SLANK') {
        const obj = objectData('Slank', 'Koepoe-Liarku', 'Orkes-Sakit-Hati', 'Lembah-Baliem', "data/img/slank2.jpg")
        article1.innerHTML = data(obj)
        a.preventDefault()
        const music = document.querySelector('.play')
        const tombol2 = document.querySelectorAll('.tombol2')
        tombol2[0].addEventListener('click', function () {
            const obj = objectData('Slank', 'Koepoe-Liarku', 'Orkes-Sakit-Hati', 'Lembah-Baliem', "data/img/slank2.jpg", "./data/audio/slank/Koepoe-Liarkoe.mp3")
            music.innerHTML = setel(obj)
        })
        tombol2[1].addEventListener('click', function () {
            const obj = objectData('Slank', 'Koepoe-Liarku', 'Orkes-Sakit-Hati', 'Lembah-Baliem', "data/img/slank2.jpg", "./data/audio/slank/Orkes-Sakit-Hati.mp3")
            music.innerHTML = setel(obj)
        })
        tombol2[2].addEventListener('click', function () {
            const obj = objectData('Slank', 'Koepoe-Liarku', 'Orkes-Sakit-Hati', 'Lembah-Baliem', "data/img/slank2.jpg", "./data/audio/slank/Lembah-Baliem.mp3")
            music.innerHTML = setel(obj)
        })


    }

})


