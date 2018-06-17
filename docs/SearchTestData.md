[links to our testing environment](https://loopback-recipe-search.herokuapp.com/explorer)



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

---

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

---
