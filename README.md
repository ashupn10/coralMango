# coralMango

Hello I am Ashutosh Mishra. I am going to begin this documentation for the reference of assignment of Coral-Mango. This readme.md file itself contain all the answers which are txt based. 
This documentation consist all the answers in section-wise as asked in the assignment. The development section's rest api is documented in the code itself.


# section I :-

1).

->      Using MySQL along with ORM sequelize. 
I am designing three models for this project  user model, restaurant model and review model respectively.

This is how user model must be defined:-

![image](https://github.com/ashupn10/coralMango/assets/68610225/2d83c8da-0320-4fd1-b436-65116f056167)

This is how restaurant model is defined:- 

![Screenshot from 2023-07-04 18-23-30](https://github.com/ashupn10/coralMango/assets/68610225/57d2b3b9-5bf6-4a99-8bb3-c043a675f666)

This is how review model is defined

![Screenshot from 2023-07-04 18-22-02](https://github.com/ashupn10/coralMango/assets/68610225/d9af049f-b248-4c6e-9390-b4171d25f991)


2). I have pushed all the codes in master branch. i am pasting link for all the models made using sequelize here.

  here is user model for your reference:
    https://github.com/ashupn10/coralMango/blob/master/models/user.js

  here is restaurant model:
    https://github.com/ashupn10/coralMango/blob/master/models/restaurant.js
  here is review model :
    https://github.com/ashupn10/coralMango/blob/master/models/review.js

3). The query will be:

  SELECT restaurant.id,restaurant.name,count(review.rating) AS total_reviews 
  FROM restaurant
  JOIN review ON restaurant.id==review.restaurantId 
  GROUP BY restaurant.name;

  and sequelize ORM code will be:
    const results = await Restaurant.findAll({
      attributes: ['id', 'name', [sequelize.fn('count', sequelize.col('Reviews.rating')), 'total_reviews']],
      include: [{
        model: Review,
        attributes: [],
      }],
      group: ['Restaurant.name'],
    });

# section II:-

4) here is the endpoints details

   ![Screenshot from 2023-07-04 19-25-57](https://github.com/ashupn10/coralMango/assets/68610225/17e9af25-b958-4dd3-81c9-796f81411492)

# section III

1).
const a = [1, 3, 5, 2, 4];

const result1=a.filter((ele,index)=>{
    if(index%2==0) return ele;
})

console.log(output);

2).
const a = [1, 3, 5, 2, 4];

const result2=a.map(ele=>{
    return ele*ele;
})

console.log(result2)

3).

 const a = [1, 3, 5, 2, 4];
 
 const result3=a.filter((ele,index)=>{
     return index%2==0
 })
 .map((ele)=>{
     return ele*ele;
 })

 console.log(result3);


 #section 4:

   My all the codes are on master branch, So to get access to the code move to the master branch.
   clone the project and install all the dependency by following the following path:
   1:    git clone https://github.com/ashupn10/coralMango.git
   2: In the terminal move to the coralMango directory and install all the dependency
     npm i
   3: npm start
   4: You can check all the endpoints on the Postman.

   NOTE: Make sure to change the .env file environment variables.
  I have not used any documentation framework instead i have written all info of the api in the code itself 

   You are good to go!

   Thankyou!
