const mobileQuery = 900;

const logo = {
    your_orders: "vip",
    reward_status: "gold",
    payment_methods: "member",
    account_settings: "elite"
};

function pageReset () {
    document.querySelectorAll(".page").forEach(e => { e.style.zIndex = "-1"; });    
}

function menuReset () {
    document.querySelectorAll("aside nav h2").forEach(e => { e.classList.remove("navSelected") });    
}

let currentPage = "";
let html = document.querySelector("html");

document.querySelectorAll("aside nav h2").forEach(e => {
    e.addEventListener("click", function () {
        if(e.id === "sign-out") return;
        pageReset();
        currentPage = this.innerHTML.replace(" ", "-").toLowerCase();
        document.querySelector("aside nav img").src = "./assets/logo-" +  
        logo[currentPage.replace("-", "_")] + ".png";
        document.querySelector('.' + currentPage).style.zIndex = "1";
        menuReset();
        e.classList.add("navSelected");
        if(window.innerWidth <= mobileQuery) {
            html.scrollTop = position[currentPage.replace("-", "_")];
        }
    })    
});    

document.addEventListener("scroll", () => {
    if(window.innerWidth <= mobileQuery) {
        position[currentPage.replace("-", "_")] = html.scrollTop;
    }
});
            
document.querySelector("#order-details-link").addEventListener("click", function() {
    pageReset();
    document.querySelector(".order-details").style.zIndex = "1";
})

const position = {
    your_orders: 0,
    order_details: 0,
    reward_status: 0,
    account_settings: 0,
    payment_methods: 0
}

