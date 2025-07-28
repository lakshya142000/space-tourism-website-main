const home = document.getElementById('home-btn')
const destination = document.getElementById('destination-btn')
const crew = document.getElementById('crew-btn')
const technology = document.getElementById('technology-btn')
const explore = document.getElementById('circle-button')

home.addEventListener('click',()=>{
    if(home.classList.contains('active')){
        home.classList.remove('active')
    }else{
        window.location.href = "index.html"
    }
})
destination.addEventListener('click',()=>{
    if(destination.classList.contains('active')){
        destination.classList.remove('active')
    }else{
        window.location.href = "destination-moon.html"
    }
    
})
crew.addEventListener('click',()=>{
    if(crew.classList.contains('active')){
        crew.classList.remove('active')
    }else{
        window.location.href = "crew-commander.html"
    }
    
})
technology.addEventListener('click',()=>{
    if(technology.classList.contains('active')){
        technology.classList.remove('active')
    }else{
        window.location.href = "technology-vehicle.html"
    }
    
})

if(explore){
    explore.addEventListener('click',()=>{
    window.location.href ='destination-moon.html' 
})
}

// handling destination

// const moon = document.getElementById('moon')
// const mars = document.getElementById('mars')
// const europa = document.getElementById('europa')
// const titan = document.getElementById('titan')

// moon.addEventListener('click',()=>{
//     console.log('moon')
//     window.location.href ='/starter-code/destination-moon.html' 
// })

// mars.addEventListener('click',()=>{
//     window.location.href ='/starter-code/destination-mars.html' 
// })

// europa.addEventListener('click',()=>{
//     window.location.href ='/starter-code/destination-europa.html' 
// })

// titan.addEventListener('click',()=>{
//     window.location.href ='/starter-code/destination-titan.html' 
// })
const sideNav=`<div class="mob-nav-buttons">
  <svg id="close-btn" xmlns="http://www.w3.org/2000/svg" width="20" height="21" onclick="closeButton()">
        <g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/>
        <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g>
  </svg>
  <div id="mob-home-btn" class="mob-nav-container">
    <span style="font-weight: bold;">00</span>
    <a class="mob-direction-a">HOME</a>
  </div>
  <div id="mob-destination-btn" class="mob-nav-container">
    <span style="font-weight: bold;">01</span>
    <a class="mob-direction-a">DESTINATION</a>
  </div>
  <div id="mob-crew-btn" class="mob-nav-container">
    <span style="font-weight: bold;">02</span>
    <a class="mob-direction-a">CREW</a>
  </div>
  <div id="mob-technology-btn" class="mob-nav-container">
    <span style="font-weight: bold;">03</span>
    <a class="mob-direction-a">TECHNOLOGY</a>
  </div>
  
</div>`

const closeBtn = document.getElementById('close-btn')

// const mobHome = document.getElementById('mob-home-btn')
// const mobDestination = document.getElementById('mob-destination-btn')
// const mobTechnology = document.getElementById('mob-technology-btn')
// const mobCrew = document.getElementById('mob-crew-btn')
const hamburger = document.getElementById('hamburger-btn')



if(hamburger){
    hamburger.addEventListener('click',()=>{
    const div = document.createElement('div');
    div.innerHTML = sideNav;
    document.body.append(div)
    hamburger.style.display = 'none'
    activeLink()
})
}
function activeLink(){
    const mobHome = document.getElementById('mob-home-btn')
    const mobDestination = document.getElementById('mob-destination-btn')
    const mobTechnology = document.getElementById('mob-technology-btn')
    const mobCrew = document.getElementById('mob-crew-btn')
   
    const address = window.location.href
    if(address.includes('index')){
        mobHome.classList.add('active')
    }
    else if(address.includes('destination')){
        mobDestination.classList.add('active')
    }
    else if(address.includes('crew')){
        mobCrew.classList.add('active')
    }
    else{
        mobTechnology.classList.add('active')
    }
    mobHome.addEventListener('click',()=>{
        if(home.classList.contains('active')){
            home.classList.remove('active')
        }else{
            window.location.href = "index.html"
        }
    })
    mobDestination.addEventListener('click',()=>{
        if(destination.classList.contains('active')){
            destination.classList.remove('active')
        }else{
            window.location.href = "destination-moon.html"
        }
        
    })
    mobCrew.addEventListener('click',()=>{
        if(crew.classList.contains('active')){
            crew.classList.remove('active')
        }else{
            window.location.href = "crew-commander.html"
        }
        
    })
    mobTechnology.addEventListener('click',()=>{
        if(technology.classList.contains('active')){
            technology.classList.remove('active')
        }else{
            window.location.href = "technology-vehicle.html"
        }
        
    })

}
function closeButton(){
    const collection = document.getElementsByClassName('mob-nav-buttons')
    collection[0].remove()
    hamburger.style.display = 'flex'
}