// Load all focusable Elements: https://piccalil.li/quick-tip/load-all-focusable-elements-with-javascript/

const getFocusableElements =  parent => { 
    if (!parent) { 
      console.warn('You need to pass a parent HTMLElement');
      return [];
    }
  
    return parent.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)'
    );
};
  
const sideBar = document.querySelector('#sidebar');
const menuButton = document.querySelector('#menu-button');
const closeButton = document.querySelector('#close-button');

window.addEventListener('focusin', () => { // Closes the sidebar when we tab out of it
    if(!sideBar.contains(document.activeElement) && sideBar.classList.contains('active')){
        toggleSideBar();
    }
})

const toggleSideBar = () => { 
    // Updating attribute based on sidebar's state
    menuButton.setAttribute('aria-expanded', sideBar.classList.toggle('active')); 
    // Syncing control buttons
    closeButton.setAttribute('aria-expanded', menuButton.getAttribute('aria-expanded')); 
}

menuButton.addEventListener('click', toggleSideBar);

closeButton.addEventListener('click', toggleSideBar); 

sideBar.addEventListener('click', (e) => {
    if(e.target.classList.contains('sidebar')){
        toggleSideBar();
        // menuButton.focus();
    }
})

