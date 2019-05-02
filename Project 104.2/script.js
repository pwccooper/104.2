
let food = ['Pizza','Tacos','Sushi','Beverage'];

let prices =  [5.00,3.00,8.00,1.50];

let options = ['Water','Tea','Lemonade','& Gatorade'];

let menu='';
for(let i=0; i<food.length; i++){
    menu=menu+(i+1)+'. '+food[i]+' - $'+prices[i]+'\n';
}

alert(menu);

let selection=prompt("Select your product(s): ");
let number=prompt("Number of products: ")
let count,total,t;


switch(selection){
    case'1':
    count=0;
    t=pay();
    alert('You have selected: \n '+food[0] + ': $'+prices[0]+'\n'+'Total= $'+t);
  
    break;

    case'2':
    count=1;
    t=pay();
    alert('You have selected: \n'+food[1] + ': $'+prices[1]+'\n'+'Total= $'+t);
    
    break;

    case'3':
     count=2;
     t=pay();
     alert('You have selected: \n'+food[2] + ': $'+prices[2]+'\n'+'Total= $'+t);
   
    break;

    case'4':
     count=3;
     t=pay();
     alert('You have selected: \n'+food[3] + ': $'+prices[3]+'\n'+'Total= $'+t);
   
    break;

    default:
     selection=prompt("Select a product: ");
     alert('Select a valid option.');
   
    break;
}

function pay(){
    let total;
    total=prices[count]*number;
    return total;
}

const food1 ={
    product:'Pizza',
    price:'$5.00'
}

const food2 ={
    product:'Tacos',
    price:'$3.00'
}

const food3 ={
    product:'Sushi',
    price:'$8.00'
}

const food4 ={
    product:'Beverages',
    price:'$1.50',
    options:'Water,Tea,Lemonade, & Gatorade'
}


console.table(food);
console.log(food1);
console.log(food2);
console.log(food3);
console.log(food4);