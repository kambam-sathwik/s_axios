function handleFormSubmit(event){
    event.preventDefault();
    let ud={
        username:event.target.username.value,
        phno:event.target.phone.value,
        mail:event.target.email.value
    }
    axios
    .post("https://crudcrud.com/api/8cce2dc784694234a8e2ff261767e976/appdata",ud)
    .then(res=>displayuser(res.data))
    .catch(err=>console.log(err));
    event.target.username.value='';
    event.target.phone.value='';
    event.target.email.value='';
}
function displayuser(ud){
    const list=document.querySelector('ul');
    const nli=document.createElement('li');
    nli.innerHTML=ud.username+" "+ud.mail+" "+ud.phno+
    '<button class="delete-button">Delete</button> <button class="edit-button">Edit</button>';
    list.appendChild(nli);
}