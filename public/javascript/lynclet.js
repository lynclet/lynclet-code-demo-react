

// 1. load the params and make some checks:

// !!! check the parent origin and deny service
const customerId = document.getElementById("lyncletApp").getAttribute("app");
const buttonColor = document.getElementById("lyncletApp").getAttribute("buttonColor");

// 2. create the elements that we need:

// 2.1 create a div wrapper element for the button
let buttonWrapperDiv = document.createElement('div')
buttonWrapperDiv.classList.add('button-wrapper')
buttonWrapperDiv.id = "buttonWrapper"
buttonWrapperDiv.style.cssText = `
    position:fixed;
    opacity: 0;
    bottom:25px;
    right:40px;
    width:60px;
    height:60px;
    // border:0px solid ${buttonColor};
    background-color: ${buttonColor};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items:center;
    box-shadow: 0 0.3rem 0.5rem rgb(0 0 0 / 40%);
    
    `
buttonWrapperDiv.animate([
    // keyframes
    { 
        opacity: 0,
        transform: 'translateY(100px)' 
    },
    { 
        opacity: 1,
        transform: 'translateY(0px)' 
    }
  ], {
    // timing options
    duration: 400,
    iterations: 1,
    fill: 'forwards',
    delay: 1500
  });


document.body.appendChild(buttonWrapperDiv);

// 2.2 create empty div to place the svg next to it
let iconWrapperDiv = document.createElement('div')
iconWrapperDiv.id = "iconWrapper"
document.getElementById('buttonWrapper').appendChild(iconWrapperDiv)

const svgIcon = `<svg aria-hidden="true" id="closedIcon" class="lynclet-svg" style="fill:#fefefe;" width="30px" height:"30px" focusable="false" data-prefix="fas" data-icon="comment-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"></path></svg>`
const svgIconClosed = `<svg focusable="false" style="fill:#fefefe;display:none;" id="openedIcon" class="lynclet-svg openedsvg" viewBox="0 0 16 14" width="28" height="25" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.116 4.884l1.768-1.768L8 9.232l6.116-6.116 1.768 1.768L8 12.768.116 4.884z"></path></svg>`

document.getElementById('iconWrapper').outerHTML += svgIcon;
document.getElementById('iconWrapper').outerHTML += svgIconClosed;




// 2.3 create the iframe
let iframe;
iframe = document.createElement('iframe');
iframe.classList.add("lynclet-app");
iframe.src = `https://client.apptest.link/app/${customerId}`;
// iframe.src = `http://localhost:3001/app/${customerId}`;

document.body.appendChild(iframe);

// create the close button box:

let closeWrapperDiv = document.createElement('div')
closeWrapperDiv.classList.add('close-wrapper')
closeWrapperDiv.id = "closeWrapper"

document.body.appendChild(closeWrapperDiv);


// 2.4 create the invite message box:
let buttonTextWrapperDiv = document.createElement('div')
buttonTextWrapperDiv.classList.add('button-text-wrapper')
buttonTextWrapperDiv.id = "buttonTextWrapper"
buttonTextWrapperDiv.style.cssText = `
    display: block;
    opacity: 0;
    position:fixed;
    bottom:25px;
    right:115px;
    width: 13rem;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 7px 6px 1px rgb(0 0 0 / 16%)`
document.body.appendChild(buttonTextWrapperDiv);
// 2.4.1 invite message text
let textItemP = document.createElement('p')
const text = document.createTextNode("Hello, can we help you with your research? 🤓 ");
textItemP.classList.add('text-item')
textItemP.id = "textItem"
textItemP.style.cssText = `
    font-size: 18px;
    margin: 0;
    `
textItemP.appendChild(text)

buttonTextWrapperDiv.animate([
    // keyframes
    { 
        opacity: 0,
        transform: 'translateX(-30px)' 
    },
    { 
        opacity: 0.7,
        transform: 'translateX(0px)' 
    }
  ], {
    // timing options
    duration: 500,
    iterations: 1,
    fill: 'forwards',
    delay: 2500
  });




buttonTextWrapperDiv.appendChild(textItemP);
// 2.4.2 invite message close button
// --> box

let closeButtonWrapper = document.createElement('div')
closeButtonWrapper.classList.add('close-button-wrapper')
closeButtonWrapper.id = "closeButtonWrapper"
closeButtonWrapper.style.cssText = `
    display: block;
    opacity: 0;
    position:fixed;
    bottom:100px;
    right:330px;
    width: 30px;
    height: 30px;
    background-color: #687882;
    border-radius: 50%;
    box-shadow: 0 7px 6px 1px rgb(0 0 0 / 16%)
    display: flex;
    justify-content: center;
    align-items:center;
    cursor: pointer;
    
    `

       closeButtonWrapper.animate([
        // keyframes
        { 
            opacity: 0,
        },
        { 
            opacity: 1,
        }
      ], {
        // timing options
        duration: 500,
        iterations: 1,
        fill: 'forwards',
        delay: 2500
      });

document.body.appendChild(closeButtonWrapper);
// --> icon
let closeIconWrapper = document.createElement('div')
closeIconWrapper.id = "closeIconWrapper"
closeIconWrapper.style.cssText = `
    display: flex;
    justify-content: center;
    align-items:center;

`
document.getElementById('closeButtonWrapper').appendChild(closeIconWrapper)
const svgIconClose = `<svg id="test-id" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="white" width="20px" height="20px">
<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>`
document.getElementById('closeIconWrapper').outerHTML += svgIconClose;
const icon = document.getElementById('test-id')
icon.style.cssText = `
position:fixed;
bottom:105px;
    right:335px;

`
// 3. Functions needed
// define the iframe size by measuring the screensize:
// media query to style the frame:

function myFunction(x) {
    if (x.matches) { // If media query matches
        iframe.style.cssText = `
             display:none;
             border: none;
             outline:none;
             position:fixed;
             bottom: 0;
             right: 0;
             width: 100vw;
             height: 100vh !important;
             border-radius: 0;
             background-color: white;
             z-index: 2147483647 !important;
        `
        // move the close button div:
        closeWrapperDiv.style.cssText = `
        position:fixed;
        top: 0px;
        right: 0px;
        width: 60px;
        height: 70px;
        z-index: 2147483647 !important;
        `
        if (iframe.classList.length > 1) {
            buttonWrapperDiv.style.cssText = `
            display: none;`
        }
    } else {
        iframe.style.cssText = `
            display:none;
            position:fixed;
            border: none;
            outline: none;
            bottom:110px;
            right:40px;
            width:350px;
            height:625px;
            border-radius:15px;
            z-index: 2147483647 !important;
        `
        closeWrapperDiv.style.cssText = `
            position:fixed;
            bottom: 665px;
            right: 40px;
            width: 60px;
            height: 70px;
            z-index: 2147483647 !important;
        `
    }
}

const x = window.matchMedia("(max-width: 440px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



// switch the classes on click in order to display/close the iframe
buttonWrapperDiv.addEventListener('click', () => {
    if (iframe.classList.length > 1) {
        iframe.classList.remove('appActive')
        iframe.style.display = 'none';
        document.getElementById('closedIcon').style.display = 'block';
        document.getElementById('openedIcon').style.display = 'none';

    } else {
        iframe.classList.add('appActive')
        iframe.style.display = 'block';
        document.getElementById('closedIcon').style.display = 'none';
        document.getElementById('openedIcon').style.display = 'block';
        // close the message also:
        closeButtonWrapper.classList.remove('messageActive')
        closeButtonWrapper.style.display = 'none';
        // also close the message box here as well.
        buttonTextWrapperDiv.style.display = 'none';
    }
})

// remove the message from close button:
closeButtonWrapper.addEventListener('click', () => {
    if (closeButtonWrapper.classList.length === 1) {
        closeButtonWrapper.classList.remove('messageActive')
        closeButtonWrapper.style.display = 'none';
        // also close the message box here as well.
        buttonTextWrapperDiv.style.display = 'none';
    }
})


// add pointer to the button and to the close button
buttonWrapperDiv.addEventListener('mouseenter', () => {
    buttonWrapperDiv.style.cursor = 'pointer'
})
closeWrapperDiv.addEventListener('mouseenter', () => {
    closeWrapperDiv.style.cursor = 'pointer'
})

// close iframe function:

closeWrapperDiv.addEventListener('click', () => {


    iframe.classList.forEach(element => {
        if (element === 'appActive') {
            iframe.classList.remove('appActive')
            iframe.style.display = 'none';
            document.getElementById('closedIcon').style.display = 'block';
            document.getElementById('openedIcon').style.display = 'none';
        }
    })

})

