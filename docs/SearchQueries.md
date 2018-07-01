# API endpoints Search Form Release
not finished. for more data check https://github.com/atherdon/recipe-search-api




http://localhost:3000/api/cousine?filter[where][id][inq]=cousineId&filter[where][id][inq]=cousineId  **not working**  
http://localhost:3000/api/cousine?filter[where][id][inq]=cousineId&filter[where][id][nin]=cousineId  **not working**  



http://localhost:3000/api/course?filter[where][id][inq]=courseId&filter[where][id][inq]=courseId  **working**  
http://localhost:3000/api/course?filter[where][id][inq]=courseId&filter[where][id][nin]=courseId  **working**

http://localhost:3000/api/course?filter[where][name]=Appetizers&access_token=%token% **working**  


http://localhost:3000/api/holiday?filter[where][id][inq]=holidayId&filter[where][id][inq]=holidayId  **working**  
http://localhost:3000/api/holiday?filter[where][id][inq]=holidayId&filter[where][id][nin]=holidayId  



#### Cooking Time (lt XX:XX) Less than
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
Method: GET
Path: /api/recipe?filter[where][cook_time][lt]={time}  
Input: JSON with properties ...
http://localhost:3000/api/recipe?filter[where][cook_time][lt]=5m  


**not finished**
#### Date(related to weekly menus)
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
Method: GET
Path: /api/menu/
Input: JSON with properties ...
date:{ gt: Date.Now() - ONE_WEEK }
http://localhost:3000/api/  


### Long query
#### Create a Meal
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
Method: GET
Path: /api/recipe?filter[where]
Input: JSON with properties ...
http://localhost:3000/api/recipe?filter[where][and][0][title]=Pork  
&filter[where][and][1][ingredients][name]=chicken  
&filter[where][and][2][cousine][cousineId]=cousineId  
&filter[where][and][3][course][courseId]=courseId  
&filter[where][and][4][holiday][holidayId]=holidayId  
&filter[where][and][5][allergy][allergyId]=allergyId  
&filter[where][and][6][diet][dietId]=dietId  


#### Parts of long query
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
Method: GET
Path: /api/recipe?filter[where]
Input: JSON with properties ...
http://localhost:3000/api/recipe?filter[where][allergies][inq]=allergyId&filter[where][allergies][inq]=allergyId **working**  
http://localhost:3000/api/recipe?filter[where][and][0][allergies][inq]=allergyId&filter[where][and][1][allergies][inq]=allergyId **working**  
http://localhost:3000/api/recipe?filter[where][and][0][allergies][inq]=allergyId&filter[where][and][1][allergies][inq]=allergyId&filter[where][and][2][courses][inq]=courseId&filter[where][and][2][courses][inq]=courseId **working**  

http://localhost:3000/api/recipe?filter[where][and][0][holidays][inq]=holidayId&filter[where][and][1][holidays][inq]=holidayId&filter[where][and][2][diets][inq]=dietId&filter[where][and][2][diets][inq]=dietId **working**  


**Note** Works on current state of database(without working well relations)

@TODO add more samples where we search recipes by attributes


links to our testing environment
**Ingredients search **
