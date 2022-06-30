getHTML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/1.html')
    request.onload=()=>{
        const div=document.createElement('div')
        div.innerHTML=request.response
        document.body.appendChild(div)
    }
    request.onerror=()=>{}
    request.send()
}
getJSON.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/2.json')
    request.onreadystatechange=()=> {
        if (request.readyState===4 && request.status===200){
            const div=document.createElement('div')
            div.innerHTML=request.response
            document.body.appendChild(div)

            console.log(request.response)
            const object=JSON.parse(request.response)
            myName.textContent=object.id
        }
    }
    request.send()

}