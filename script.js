window.addEventListener("DOMContentLoaded",()=>{
  let input_1 = document.getElementById('input-load-1')
  let input_2 = document.getElementById('input-load-2')
    let btn = document.getElementById("btn-load")
  
    btn.addEventListener("click",()=>{
      try{
       fetch("http://localhost:3000/api/v1",{method:"POST"}).then((res)=>{
        console.log(res.status)
        alert("Etiquetas geradas com sucessor ")
      console.log(res.data)
      })
      }
  catch(e){
    alert("Algo deu errado ,verique sua conexão com a internet")
    console.log(`erro : ${e}`)
  }
})
})