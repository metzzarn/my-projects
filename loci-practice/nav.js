// Create the Menu HTML structure
const menuHTML = `
    <div id="sideMenu" class="side-menu">
        <a href="javascript:void(0)" class="closebtn" onclick="toggleNav()">&times;</a>
        <div class="menu-header">Loci Navigator</div>
        <a href="../index.html">🏠 Back to Project Hub</a>
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
    /* Side Menu Drawer */
    .side-menu {
        height: 100%; width: 0; position: fixed; z-index: 1001;
        top: 0; left: 0; background-color: #111; overflow-x: hidden;
        transition: 0.5s; padding-top: 60px; text-align: left;
    }
    .side-menu a {
        padding: 15px 25px; text-decoration: none; font-size: 18px;
        color: #818181; display: block; transition: 0.3s;
    }
    .side-menu a:hover { color: #f1f1f1; background: #222; }
    .side-menu .closebtn {
        position: absolute; top: 0; right: 25px; font-size: 36px; margin-left: 50px;
    }
    .menu-header { color: white; padding: 10px 25px; font-weight: bold; font-size: 20px; }
    hr { border: 0; border-top: 1px solid #333; margin: 10px 20px; }

    /* Top Navbar container to prevent overlap */
    #topNavbar {
        position: sticky; top: 0; left: 0; width: 100%; height: 50px;
        background: #f0f2f5; z-index: 999; display: flex; align-items: center;
        padding-left: 10px; border-bottom: 1px solid #ddd;
    }

    #menuTrigger {
        padding: 8px 15px; background: #333; color: white;
        border: none; border-radius: 5px; cursor: pointer; font-weight: bold;
    }

    /* Mobile Specific Adjustment */
    @media screen and (max-width: 600px) {
        body { padding-top: 0 !important; margin-top: 0 !important; }
        h1 { margin-top: 20px !important; }
        #topNavbar { background: #ffffff; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
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
    if (menu.style.width === "250px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "250px";
    }
}
