
[links to our testing environment](https://loopback-recipe-search.herokuapp.com/explorer)
## Ingredients search


http://recipe-api-loopback.herokuapp.com/api/ingredient?filter[where][name][like]=kosher


| Pathl  | https://loopback-recipe-search.herokuapp.com/api/ingredient  | |
| Pathl  | https://loopback-recipe-search.herokuapp.com/api/ingredient?filter[where][name][like]=kosher

| Pathl  | https://loopback-recipe-search.herokuapp.com/api/ingredient?filter[where][name]=chicken

https://loopback-recipe-search.herokuapp.com/api/ingredient?filter[where][name][like]=oil

| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  





https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][id]=5a8b57fc25b0113b4b961a27
https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=cuisine  
 http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  





https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=course

https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][name][like]=Appetizers  


---
https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][id]=5a8b57fc25b0113b4b961a1d&[where][or][][id]=5a8b57fc25b0113b4b961a21

 https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=holiday

 http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%   

https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=allergy
http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  


https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=diet

 http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%   


| Pathl  | https://loopback-recipe-search.herokuapp.com/api/recipe?filter[where][title][like]=Apple
| Pathl  | https://loopback-recipe-search.herokuapp.com/api/recipe?filter[where][title][like]=Chicken


@TODO add stuff where we can search by title not only at recipe name, but including ingredients and search there.

@TODO propose to add example at REST link on https://loopback.io/doc/en/lb3/Where-filter.html#ilike-and-nilike  


## Date stuff(free menu part)

**Date(related to weekly menus) **
| First Header | Second Header | Status |
| ------------- | ------------- |------------- |
| Method | GET |
| Pathl | l |
| Pathl | l |
| Pathl | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token% |
date:{ gt: Date.Now() - ONE_WEEK }
https://loopback-recipe-search.herokuapp.com/api/
https://github.com/ChickenKyiv/recipe-search-api/issues/18

---

## Cooking Time lt XX:XX

| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  | |
| Pathl  | l  | |
| Pathl  | l  | |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  | |
https://loopback-recipe-search.herokuapp.com/api/recipe?filter[where][cook_time][lt]=5m  

https://github.com/ChickenKyiv/recipe-search-api/issues/17
