class Food
{
    constructor(){
        this.image = loadImage("images/Milk.png")
    }
    getFood()
    {
        var foodStockRef = database.ref('Food')
        foodStockRef.on("value",(data)=>{
            foodS = data.val();
        })
    }

    feedDog(x)
    {
        if(x<=0)
        {
            x=0
        }
        else{
            x -= 1
            dog.addImage(happyDog)
            image(this.image,1120,300,80,80)
        }
        database.ref('/').update({
            Food:x,
            feedTime:hour()
        })
    }

    

    addFood(y)
    {
        foodS++;
        database.ref('/').update({
            Food:foodS
        })
    }
    

    display()
    {
        var x = 80,
        y = 100;

        if(foodS !== 0)
        {
            for(var i = 0; i < foodS; i++)
            {
                if(i % 10 === 0 )
                {
                    x= 80;
                    y = y +100;
                }
                image(this.image,x,y,80,80);
                x = x +40
            }
        }
    }
}