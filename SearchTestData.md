
[links to our testing environment](https://loopback-recipe-search.herokuapp.com/explorer) 
## Ingredients search 


http://recipe-api-loopback.herokuapp.com/api/ingredient?filter[where][name][like]=kosher

| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  | |
| Pathl  | https://loopback-recipe-search.herokuapp.com/api/ingredient  | |
| Pathl  | https://loopback-recipe-search.herokuapp.com/api/ingredient?filter[where][name][like]=kosher
  | W |
| Pathl  | https://loopback-recipe-search.herokuapp.com/api/ingredient?filter[where][name]=chicken
  |  W |
| Pathl  | 
https://loopback-recipe-search.herokuapp.com/api/ingredient?filter[where][name][like]=oil
  | W |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  | W |

**not working **   
https://loopback-recipe-search.herokuapp.com/api/ingredients?filter[where][name][inq]=chicken&filter[where][name][inq]=pasta  
**not working **    
https://loopback-recipe-search.herokuapp.com/api/ingredients?filter[where][name][inq]=chicken&filter[where][name][nin]=pasta  
---





**Cousines search**
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |  | 
| Pathl  | https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][id]=5a8b57fc25b0113b4b961a27  | W |
| Pathl  | https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=cuisine  | W |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  | W |
 




**Courses search**
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  | | 
| Pathl  | https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=course  | W |
| Pathl  | l  | W |
| Pathl  |https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][name][like]=Appetizers  | w |

https://loopback-recipe-search.herokuapp.com/api/course?filter[where][id]=courseId  **working **
https://loopback-recipe-search.herokuapp.com/api/course?filter[where][id][inq]=courseId&filter[where][id][inq]=courseId  **working **  
https://loopback-recipe-search.herokuapp.com/api/course?filter[where][id][inq]=courseId&filter[where][id][nin]=courseId  **working **

---
https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][id]=5a8b57fc25b0113b4b961a1d&[where][or][][id]=5a8b57fc25b0113b4b961a21

**Holidays search **
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  | |
| Pathl  | https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=holiday  | |
| Pathl  | l  | |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  | |
https://loopback-recipe-search.herokuapp.com/api/holiday?filter[where][id]=holidayId  **working **  
https://loopback-recipe-search.herokuapp.com/api/holiday?filter[where][id][inq]=holidayId&filter[where][id][inq]=holidayId  **working **  
https://loopback-recipe-search.herokuapp.com/api/holiday?filter[where][id][inq]=holidayId&filter[where][id][nin]=holidayId  

**Allergies search **
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  | |
| Pathl  | https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=allergy  | |
| Pathl  | l  | |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
https://loopback-recipe-search.herokuapp.com/api/allergy?filter[where][id]=allergyId  
https://loopback-recipe-search.herokuapp.com/api/allergy?filter[where][id][inq]=allergyId&filter[where][id][inq]=allergyId  
https://loopback-recipe-search.herokuapp.com/api/allergy?filter[where][id][inq]=allergyId&filter[where][id][nin]=allergyId  

**Diets search **
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  | |
| Pathl  | https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=diet  | |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  | |
https://loopback-recipe-search.herokuapp.com/api/diet?filter[where][id]=dietId  **working **  
https://loopback-recipe-search.herokuapp.com/api/diet?filter[where][id][inq]=dietId&filter[where][id][inq]=dietId    **working **  
https://loopback-recipe-search.herokuapp.com/api/diet?filter[where][id][inq]=dietId&filter[where][id][nin]=dietId  


### Recipe Name
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  | |
| Pathl  | l  | | 
| Pathl  | https://loopback-recipe-search.herokuapp.com/api/recipe?filter[where][title][like]=Apple  | W |
| Pathl  | https://loopback-recipe-search.herokuapp.com/api/recipe?filter[where][title][like]=Chicken  | W |
  

@TODO add stuff where we can search by title not only at recipe name, but including ingredients and search there.

@TODO propose to add example at REST link on https://loopback.io/doc/en/lb3/Where-filter.html#ilike-and-nilike  

### Long query
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  | |
| Pathl  | l  | |
| Pathl  | l  | |
| Pathl  | http://loopback-recipe-search/api/ingredient?filter[where][name]=chicken&access_token=%token%  | |
https://recipe-api-loopback.herokuapp.com/api/recipe?filter[where][and][0][name]=Pork  
&filter[where][and][1][ingredients][name]=chicken  
&filter[where][and][2][cousine][cousineId]=cousineId  
&filter[where][and][3][course][courseId]=courseId  
&filter[where][and][4][holiday][holidayId]=holidayId  
&filter[where][and][5][allergy][allergyId]=allergyId  
&filter[where][and][6][diet][dietId]=dietId  


### Parts of long query
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  | |
| Pathl  | l  | |
| Pathl  | l  | | 
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  | |
https://loopback-recipe-search.herokuapp.com/api/recipe?filter[where][allergies][inq]=allergyId&filter[where][allergies][inq]=allergyId **working **  
https://loopback-recipe-search.herokuapp.com/api/recipe?filter[where][and][0][allergies][inq]=allergyId&filter[where][and][1][allergies][inq]=allergyId **working **  
https://loopback-recipe-search.herokuapp.com/api/recipe?filter[where][and][0][allergies][inq]=allergyId&filter[where][and][1][allergies][inq]=allergyId&filter[where][and][2][courses][inq]=courseId&filter[where][and][2][courses][inq]=courseId **working **  

https://loopback-recipe-search.herokuapp.com/api/recipe?filter[where][and][0][holidays][inq]=holidayId&filter[where][and][1][holidays][inq]=holidayId&filter[where][and][2][diets][inq]=dietId&filter[where][and][2][diets][inq]=dietId **working**  


What data can be used for search from imported script
We have x recipes
We have x allergies
We have x courses
We have x cuisines
We have x diets
We have x holidays
We have x nutritions
We have x menus
We have x nutritions  
We have x ingredients attached to recipes
We have x ingredients attached to departments and grocery

How to test
Simple queries
ingredients by name
this ingredients was not attached to recipes. But still have data stored.
```
Asparagus
Carrots
Celery
```

this ingredients attached to different recipes
```
scallions
apple
banana
beef roast
black pepper
```

```
attributes by name
Gluten-Free
Peanut-Free
Soy-Free
```

```
Main Dishes
Desserts
```
```
American
Asian
Mexican
```
```
Lacto vegetarian
Pescetarian
Vegan
```
```
Christmas
Thanksgiving
Fall
```

recipes by name
```
Baked Chicken ...
Perfect Apple Pie
... Fruit Salad
Crock Pot Roast
```

