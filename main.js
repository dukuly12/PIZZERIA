menu_list_array = ["Veg Margherita Pizza",//add more items
                    ];

function getmenu(){
var htmldata;
//Complete the code
meuo_list_array=[
    "veg Margerita Pizza","Chicken Tandoori Pizza","veg Supreme pizza","Paneer Tikka Pizza","Deluxe veggie Pizza","veg ExtraVaganza Pizza"
];
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
//Complete the code
function getmua() {
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.lenght;i++){
        htmldata=htmldata+'<div class="card">'
        +'<img scr= "images/pizzaImg.png"/>'
        +menu_list_array[i] + '</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}

}

function add_top(){
//Complete the code
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}