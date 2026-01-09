// Create the Menu HTML structure
const menuHTML = `
    <div id="sideMenu" class="side-menu">
        <a href="javascript:void(0)" class="closebtn" onclick="toggleNav()">&times;</a>
        <div class="menu-header">Loci Navigator</div>
        <a href="../index.html">🏠 Project Hub</a>
        <hr>
        <a href="index.html">Level 1: Entryway</a>
        <a href="level2.html">Level 2: Living Room</a>
        <a href="level3.html">Level 3: Full House</a>
    </div>
    <div id="topNavbar">
        <button id="menuTrigger" onclick="toggleNav()">☰ Levels</button>
    </div>
`;

// Create the CSS for the Menu
const menuStyles = `
    /* Side Menu Drawer - Light Theme */
    .side-menu {
        height: 100%; 
        width: 0; 
        position: fixed; 
        z-index: 1001;
        top: 0; 
        left: 0; 
        background-color: #f8fafc; /* Light grey-white */
        overflow-x: hidden;
        padding-top: 60px; 
        text-align: left;
        box-shadow: 2px 0 10px rgba(0,0,0,0.1);
        /* Transition removed per request */
    }
    .side-menu a {
        padding: 15px 25px; 
        text-decoration: none; 
        font-size: 18px;
        color: #475569; /* Slate grey text */
        display: block;
    }
    .side-menu a:hover { 
        color: #1a73e8; 
        background: #f1f5f9; 
    }
    .side-menu .closebtn {
        position: absolute; 
        top: 10px; 
        right: 20px; 
        font-size: 36px; 
        color: #64748b;
    }
    .menu-header { 
        color: #1a73e8; 
        padding: 10px 25px; 
        font-weight: bold; 
        font-size: 20px; 
    }
    hr { border: 0; border-top: 1px solid #e2e8f0; margin: 10px 20px; }

    /* Invisible Top Navbar */
    #topNavbar {
        position: absolute; /* Changed to absolute so it doesn't push content down */
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 60px;
        background: transparent; /* Invisible background */
        z-index: 999; 
        display: flex; 
        align-items: center;
        padding-left: 15px;
    }

    #menuTrigger {
        padding: 8px 16px; 
        background: #334155; 
        color: white;
        border: none; 
        border-radius: 6px; 
        cursor: pointer; 
        font-weight: bold;
        opacity: 0.9;
    }
    #menuTrigger:hover { opacity: 1; }

    /* Mobile Spacing */
    @media screen and (max-width: 600px) {
        h1 { margin-top: 70px !important; } /* Make room for the floating button */
    }
`;

// Inject Styles
const styleSheet = document.createElement("style");
styleSheet.innerText = menuStyles;
document.head.appendChild(styleSheet);

// Inject Menu
document.body.insertAdjacentHTML('afterbegin', menuHTML);

// Toggle Function
window.toggleNav = function() {
    const menu = document.getElementById("sideMenu");
    // Width change happens instantly now as transition is gone
    if (menu.style.width === "250px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "250px";
    }
}
