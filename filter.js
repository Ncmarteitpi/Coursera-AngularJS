var numers = [1,2,3,4,5,6,7,8,9,10];
console.log("Number :",numers);
function tofilter(value)
{
    return value < 3;
}
var filterNum = numers.filter(tofilter);
console.log("Number :",filterNum);

var shoplist1 = ["Milk","Chocolate","Cookies","Brownies","Nutella","Almonds","Peanut Butter","Milk Choco Drink"];
console.log("Shopping List : ",shoplist1);
var searchShop = "Milk"

function searchItems(value)
{
    return value.indexOf(searchShop) !== -1;
}

var searchItem = shoplist1.filter(toSearchItem);
console.log("Searched Shopping List : ",searchItem);