const logo = {
    your_orders: "vip",
    reward_status: "gold",
    payment_methods: "member",
    account_settings: "elite"
};
let container = document.querySelector(".container");
let aside = document.querySelector("aside");
let currentPage = "your-orders";

function pageReset () {
    document.querySelectorAll(".page").forEach(e => { e.style.zIndex = "-1"; });    
}

function menuReset () {
    document.querySelectorAll("aside nav h2").forEach(e => { e.classList.remove("navSelected") });    
}

//in mobile: set the container height to the document height so the pages fill it 
function containerHeight () {
    if (window.innerWidth <= 900) { 
        container.style.height = document.body.scrollHeight + "px";
    } else {
        container.style.height = "unset";
    }
}

//in desktop: set the aside bar to fill the scroll height when there is a vertical scrollbar
function insanity () {
    //Vertical Scrollbar
    var vs = container.scrollHeight > container.clientHeight;
    if(vs) {
        aside.style.height = container.scrollHeight + "px";
    }
    else {
        aside.style.height = "100vh";
    }
}
containerHeight();

window.onresize = () => {
    containerHeight();
    insanity();
}

document.querySelector("#order-details-link").addEventListener("click", function() {
    this.style.zIndex = "1";
    pageReset();
})

document.querySelectorAll("aside nav h2").forEach(e => {
    e.addEventListener("click", function () {
        if(e.id === "sign-out") return;
        //set page
        pageReset();
        let pageIndex = this.innerHTML.replace(" ", "-").toLowerCase();
        currentPage = pageIndex;
        document.querySelector("aside nav img").src = "./assets/logo-" +  
        logo[pageIndex.replace("-", "_")] + ".png";
        document.querySelector('.' + pageIndex).style.zIndex = "1";
        containerHeight();
        // insanity();
        //set menu
        menuReset();
        e.classList.add("navSelected");
    })    
});    
