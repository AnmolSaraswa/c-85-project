menu_list_array = ["Veg Margherita Pizza",
    "Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Paneer Tikka Pizza",
    "Deluxe Veggie Pizza"
    , "Veg Extravaganza Pizza"];
//Add more Pizza item names

pizza_list_array = [];

function getmenu() {
    // Give the appropriate id name as pizza_name

    var item = document.getElementById("pizza_name").value;


    //Add push() function to push item into array

    pizza_list_array.push(item);


    var htmldata = "";

    for (var i = 0; i < menu_list_array.length; i++) {

        htmldata = htmldata + menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as display_menu 

    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion() {

    //Give the appropriate id name as add_item

    var item = document.getElementById("add_item").value;

    //Use the push() function to push the item into menu_list_array

    menu_list_array.push(item);

    add_item();

    var remove_commas = pizza_list_array.join("<br># ");

    document.getElementById("display_menu").innerHTML = remove_commas;
}


