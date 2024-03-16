
document.getElementById("btnid").addEventListener("click",demo2=()=>{
   let input = parseInt(document.getElementById("inputid").value);
   for(let i=0;i<input;i++){

       let div=document.createElement("div");
       div.setAttribute("class","col-3 d-flex flex-column m-2");
       div.style.border="1px solid black";

    let l1 = document.createElement('label');
    let txt = document.createTextNode("userName");
    let inp = document.createElement("input");
    inp.setAttribute("type","text");
    l1.appendChild(txt);
    l1.appendChild(inp);

    let l2 = document.createElement("label")
    let txt2 = document.createTextNode("password")
    let inp2 = document.createElement("input")
    inp2.setAttribute("type","password")
    l2.appendChild(txt2);
    l2.appendChild(inp2)

    let inp3 = document.createElement("input")
    inp3.setAttribute("type","button")
    inp3.setAttribute("value","click")
    
    let box = document.getElementById("box")
    div.append(l1,l2,inp3)
    box.appendChild(div)
    
   }

})