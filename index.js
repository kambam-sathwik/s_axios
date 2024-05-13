function handleFormSubmit(event){
    event.preventDefault();
    let ud={
        username:event.target.username.value,
        phno:event.target.phone.value,
        mail:event.target.email.value
    }
    axios
    .post("https://crudcrud.com/api/75f5fd46106648c888d2fc15399c8653/appdata",ud)
    .then(res=>displayuser(res.data))
    .catch(err=>console.log(err));
    event.target.username.value='';
    event.target.phone.value='';
    event.target.email.value='';
}
function displayuser(ud){
    if (ud && ud.username && ud.mail && ud.phno) {
        const list=document.querySelector('ul');
    const nli=document.createElement('li');
    nli.innerHTML=ud.username+" "+ud.mail+" "+ud.phno+
    '<button class="delete-button">Delete</button> <button class="edit-button">Edit</button>';
    list.appendChild(nli);
    const dbtn=nli.querySelector('.delete-button');
    dbtn.onclick=()=>{
        axios
        .delete(`https://crudcrud.com/api/75f5fd46106648c888d2fc15399c8653/appdata/${ud._id}`)
        .then(()=>{
            list.removeChild(nli);
        })
        .catch((err)=>{
            console.log(err);
        })
    };
    const ebtn=nli.querySelector(".edit-button");
    ebtn.onclick=()=>{
        axios
        .delete(`https://crudcrud.com/api/75f5fd46106648c888d2fc15399c8653/appdata/${ud._id}`)
        .then(()=>{
            document.querySelector('#username').value=ud.username;
            document.querySelector('#email').value=ud.mail;
            document.querySelector('#phone').value=ud.phno;
            list.removeChild(nli);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    }
}
window.addEventListener("DOMContentLoaded",()=>{
    axios
    .get("https://crudcrud.com/api/75f5fd46106648c888d2fc15399c8653")
    .then((res)=>{
        for(let i=0;i<res.data.length;i++){
            displayuser(res.data[i]);
        }
    })
})