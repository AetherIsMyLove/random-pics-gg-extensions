function randomImg(){
    fetch('https://somepictureofcodyjasmine.jessenqu07.repl.co/api/CoJas/random')
    .then(res => {
        return(res.json())
    })
    .then(data => {
      let imgSrc = data.image
      let imgDom = document.getElementById('img')
      imgDom.innerHTML = `<img src="${imgSrc}"/>
      
      `
     
    })
  }
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.querySelector('.page').style.display = "block";
  }