
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
