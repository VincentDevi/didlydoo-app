

const addEventOnPlusIcon = () =>{
    const icon = document.getElementById('addDate');
    const iconContainer = document.getElementById('iconContainer');
    const form = document.getElementById('form');
    icon.addEventListener('click',addingDate =>{
        
        
        const input = document.createElement('input');
        input.setAttribute('type','date');
        input.classList.add('form__date');
        form.insertBefore(input,iconContainer);

        
    })
}
export{addEventOnPlusIcon};