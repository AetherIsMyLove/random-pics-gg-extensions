let btn = document.querySelector('button')
setTimeout(showPage, 1000);

randomImg()

btn.addEventListener('click',() => {
  setTimeout(showPage, 1000);
  
 randomImg()
})
  
 /* const image = [
    "https://scontent.fhph2-1.fna.fbcdn.net/v/t1.15752-9/240646722_244613240773772_1297283814308686444_n.png?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=VMVx-Q8ccs8AX8oYM01&_nc_ht=scontent.fhph2-1.fna&oh=fa3d3b2bbc68271ce137aceae7506fc7&oe=616D0518",
    "https://scontent.fhph1-1.fna.fbcdn.net/v/t1.15752-9/241468426_859327758282024_5116289769880159921_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=OoqnRrewubYAX_i42PY&_nc_ht=scontent.fhph1-1.fna&oh=54b84f1336e046918b9dd5b1cb35db4e&oe=616DDCE4",
    "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/241690058_875594136712454_7049304709150297478_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=iCiq7GwLrwwAX9mNC1G&_nc_ht=scontent.fhph1-3.fna&oh=c6355fff88d27c85d525d7a56a6b4346&oe=616C0B5B",
    "https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/241684421_991963848252816_5540700229812123930_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=UmkkUvmwT2IAX97fnhr&tn=eDC1erv6msdSiPkM&_nc_ht=scontent.fhph1-2.fna&oh=7e3d6dc4caace54a1eed4ee3d5627d41&oe=616B95EC",
    "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/241681562_4339476826132969_5731961261925406600_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=RK-zwkl0iFsAX-x8yw1&_nc_ht=scontent.fhph1-3.fna&oh=dcde8578a1be2e64c37c32fb045acc7e&oe=616DCBE3",
    "https://scontent.fhph2-1.fna.fbcdn.net/v/t1.15752-9/241708321_893366261588881_7361996562131385794_n.png?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=MZ7HA0AFA_QAX9zSa_j&_nc_ht=scontent.fhph2-1.fna&oh=26b1ddf310a7640c5169057b8971bfbd&oe=616B020B",
    "https://scontent.fhph2-1.fna.fbcdn.net/v/t1.15752-9/241708321_893366261588881_7361996562131385794_n.png?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=MZ7HA0AFA_QAX9zSa_j&_nc_ht=scontent.fhph2-1.fna&oh=26b1ddf310a7640c5169057b8971bfbd&oe=616B020B",
    "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/241664822_4866721533355640_269305999626958676_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=rwRJhicAYgcAX8j74lk&_nc_ht=scontent.fhph1-3.fna&oh=afe631c4c1b59ebe865ca2d2f21558d1&oe=616D8650",
    "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/241710898_916615938935925_4149490038197844522_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=6ALILFF4hMsAX-wQKD1&_nc_ht=scontent.fhph1-3.fna&oh=1ff0cf55c638dce669d740b07fefb9bc&oe=616C6BE5",
    "https://scontent.fhph1-1.fna.fbcdn.net/v/t1.15752-9/241645211_573237360390732_6499032728096100860_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=ZfVLwKdh76IAX-vtG3h&_nc_ht=scontent.fhph1-1.fna&oh=b50717c3b93de6cd47f343d04f9369ea&oe=616AFCC8",
    "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/241557119_917586945773046_6403692802846253212_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=sSHa4Gy0hWIAX9cMgzJ&_nc_ht=scontent.fhph1-3.fna&oh=3ade2130f90b7f45c9cc906a39f1a3b9&oe=616BE7F6",
    "https://scontent.fhph1-1.fna.fbcdn.net/v/t1.15752-9/241500172_399401898265142_285417945223816951_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=E3XbXaPxrDgAX_J2FWa&_nc_oc=AQkOqeO4rC1ay_SQlaVEY9LXp--4OA_7NqXKFZccXPQ7Tg0ak1vVb3unsU8oIyoPsf1BVCf6ClTeSbQVOMGmqQE9&tn=eDC1erv6msdSiPkM&_nc_ht=scontent.fhph1-1.fna&oh=d23b8ba0a53d962bf7b9887fffd27ffe&oe=616A8DED",
    "https://scontent.fhph1-1.fna.fbcdn.net/v/t1.15752-9/241568982_176594001263400_3258532355495265336_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=a_dI6hcMgqcAX8EpRmd&_nc_oc=AQnYJk_N0xrPkR9pIIt_6lHK72Nr42NQvPp5jJG0SDuZ97by0pxsilfTs0EO09WElZ9AKr7wEnsYMihFEzGKmSW1&_nc_ht=scontent.fhph1-1.fna&oh=3c3c5ce4a264979b84f28a36afb4cce5&oe=616CBF24",
    "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/241415039_935952887036568_2965497069791297550_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Kc2ZUVGAtmoAX-iD2G9&tn=eDC1erv6msdSiPkM&_nc_ht=scontent.fhph1-3.fna&oh=18c0a37a35567e6767365cf53c8a5fe6&oe=616D2A5F",
    "https://scontent.fhph2-1.fna.fbcdn.net/v/t1.15752-9/240180074_295238405695447_7225879422739633173_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=8ZITsIA5vmsAX_qH7tB&_nc_ht=scontent.fhph2-1.fna&oh=2fb7c98b52b4bb603bca2e808f5d2594&oe=616E1094",
    "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.15752-9/213422973_145758467637576_2756011011384732607_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=qYg6eYDYzncAX_Z7Q2W&_nc_ht=scontent.fhph1-3.fna&oh=195858340c602fd4597e31503af1c201&oe=616D29E2",
    "https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/238765012_437666557742587_6869675648316084014_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=8aH0vu73dkUAX9mVzOd&_nc_ht=scontent.fhph1-2.fna&oh=4ad280e897d0422c3ebae593db543166&oe=616D84CD",
    "https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/239663773_216754067049041_8352890147968045671_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=ihM2FQyuu0MAX85inN8&tn=eDC1erv6msdSiPkM&_nc_ht=scontent.fhph1-2.fna&oh=e2aa7ca2e60fb0dbf179955ac5890bd0&oe=616A431E"
  ]
 const imgLength = image.length
 const rdNum = Math.floor(Math.random()*imgLength)
 const rdImg = image[rdNum]
 let imgDom = document.getElementById('img')
 imgDom.innerHTML = `<img src="${rdImg}"/>`*/