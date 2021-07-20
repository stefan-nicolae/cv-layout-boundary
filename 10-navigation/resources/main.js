const logo = {
    your_orders: "vip",
    reward_status: "gold",
    payment_methods: "member",
    account_settings: "elite"
};

function pageReset () {
    document.querySelectorAll(".page").forEach(e => { e.style.zIndex = "-1"; });    
}

document.querySelector("#order-details-link").addEventListener("click", function() {
    this.style.zIndex = "1";
    pageReset();
})

function menuReset () {
    document.querySelectorAll("aside nav h2").forEach(e => { e.classList.remove("navSelected") });    
}

let container = document.querySelector(".container");
function containerHeight () {
    container.style.height = document.body.scrollHeight + "px";
}
containerHeight();

document.querySelectorAll("aside nav h2").forEach(e => {
    e.addEventListener("click", function () {
        if(e.id === "sign-out") return;
        //set page
        pageReset();
        let pageIndex = this.innerHTML.replace(" ", "-").toLowerCase();
        document.querySelector("aside nav img").src = "./assets/logo-" +  
        logo[pageIndex.replace("-", "_")] + ".png";
        document.querySelector('.' + pageIndex).style.zIndex = "1";
        containerHeight();
        //set menu
        menuReset();
        e.classList.add("navSelected");
    })    
});    

