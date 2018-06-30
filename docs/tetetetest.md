Search form tests

Case1: Submit An Empty form

Result: Message - "   "

Case2: Recipe title only

Case3: Ingredients included only

Case4: Ingredients exclided only

Case5: Allergies included

Case6: Allergies excluded

Case7: Diets included


---

Case1:
Recipe Name: Perfect Apple Pie
Ingredients: apple, sugar

Diets: vegan
Holidays: Christmas, New year, Fall
Courses: Desserts, Breakfast

Cuisines: Kid-Friendly, English

Allergies: Gluten free, Soy Free

Case2:
Recipe Name: basic fruit Salad
Ingredients: apple, Potatoes
Diets: vegan, paleo
Holidays: Fall, Winter
Courses: Salads, Breakfast
Cuisines: Kid-friendly, English, French
Allergies: Egg free, Gluten free

Case3:
Recipe Name: Backed Chicken Chimichangas
Ingredients: Black pepper, scallions, mozarella cheese, potatoes
Diets: Pescetarian
Holidays: Winter, New year
Courses: main Dishes, Breakfast
Cuisines: French, English
Allergies: Soy free

Case4 :
Recipe name: Crook Pot Roast
Ingredients; grapes, mozarella cheese, water, sugar
Diets: Pescetarian
Holidays: Christmas, new year, winter
Courses: Main Dishes
Cuisines: German, French
Allergies: Soy Free

Case5:
Recipe Name: bacon Fried Rice
ingredient: black pepper, scallions
Diets: paleo
Courses: main dishes, Breakfast
Allergies: Gluten-free
Holidays: halloween, Winter
Cuisines: Kid-friendly, french

Attributes that have one or more results

Allergy:
Soy Free

Egg-free
Gluten-Free

Courses:
Main dishes
Desserts
Salads
Breakfast


Cuisines
Kid-Friendly
french
English
German

Diets:
Paleo
Pescetarian
vegan

Holidays:
Christmass
Fall
new Year
Winter
Halloween


ingredients
Black Pepper
apple
sugar
water
mozarella cheese
Potatoes
scallions



case x:
Winter
French

will should return
'backed chicken chimichangas'
'Bacon Fried Rice'
'Crook Pot Roast'



case x:

Black pepper
scallions

Winter

Main dishes
Breakfast

French

will should return
'Bacon fried rice'
'backed chicken Chimichangas'

case x:

Apple

Fall

Kid-friendly
English

Breakfast

Gluten Free

Vegan

'Basic Fruit salad'
'Perfect Apple Pie'


---

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

## How to test

###### Simple queries
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
