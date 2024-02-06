
setMode();
function onModeButtonClick(){
    const radioButton=document.getElementsByName('theme');
    radioButton.forEach(e=>{
        if(e.checked){
            if(e.value==='Dark'){
                localStorage.setItem('theme','Dark')
            }
            else if(e.value==='Light'){
                localStorage.setItem('theme','Light')
            }
            else{
                localStorage.removeItem('theme')
            }
        }
    })
    setMode();
}

function setMode(){
    const mode=localStorage.getItem('theme')
    if(mode===null){
        if(window.matchMedia('(prefers-color-scheme:dark)').matches){
            document.documentElement.classList.add('dark');
            document.getElementById('imgId').src="./assets/logo_dark_mode.svg"
        }
        else{
            document.documentElement.classList.remove('dark');
            document.getElementById('imgId').src="./assets/logo.svg"
        }
        document.getElementById('defaultMode').checked=true
    }
    else if(mode=='Dark'){
        document.documentElement.classList.add('dark');
        document.getElementById('darkMode').checked=true;
        document.getElementById('imgId').src="./assets/logo_dark_mode.svg"
    }
    else{
        document.documentElement.classList.remove('dark')
        document.getElementById('lightMode').checked=true;
        document.getElementById('imgId').src="./assets/logo.svg"
    }
    setActiveClass();
}

function setActiveClass(){
    const radioButton=document.getElementsByName('theme');
    radioButton.forEach(e=>{
        const labelClasses=e.nextElementSibling.classList;
        if(e.checked){
            labelClasses.add('bg-purple-700','text-white')
        }
        else{
            labelClasses.remove('bg-purple-700','text-white')
        }
    })
    
}