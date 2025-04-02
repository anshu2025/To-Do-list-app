const inbox=document.getElementById('in-box');
    const listbox=document.getElementById('list-box');
    function task(){
        if (inbox.value ===''){
            alert(" Please! Add something: ");
        }else{
            let li=document.createElement('li');
            li.innerHTML=inbox.value;
            listbox.appendChild(li);
            let span=document.createElement('span');
                span.innerHTML='\u00d7';
                li.appendChild(span);
        }
        inbox.value="";
        save();
    }
    listbox.addEventListener('click',function(e){
       if(e.target.tagName==='LI'){
        e.target.classList.toggle('tic');
        save();

       }else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        save();
       }
    },false);
    function save (){
       localStorage.setItem('data',listbox.innerHTML);
    }
    function showdata(){
        listbox.innerHTML=localStorage.getItem('data');
    }
    showdata();