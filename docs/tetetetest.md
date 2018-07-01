Search form tests


Case1:
Recipe Name: Perfect Apple Pie
Ingredients: apple, sugar
Diets: vegan
Holidays: Christmas, New year, Fall
Courses: Desserts, Breakfast
Cuisines: Kid-Friendly, English
Allergies: Gluten free, Soy Free

---

Case2:
Recipe Name: basic fruit Salad
Ingredients: apple, Potatoes
Diets: vegan, paleo
Holidays: Fall, Winter
Courses: Salads, Breakfast
Cuisines: Kid-friendly, English, French
Allergies: Egg free, Gluten free

---

Case3:
Recipe Name: Backed Chicken Chimichangas
Ingredients: Black pepper, scallions, mozarella cheese, potatoes
Diets: Pescetarian
Holidays: Winter, New year
Courses: main Dishes, Breakfast
Cuisines: French, English
Allergies: Soy free

---

Case4 :
Recipe name: Crook Pot Roast
Ingredients; grapes, mozarella cheese, water, sugar
Diets: Pescetarian
Holidays: Christmas, new year, winter
Courses: Main Dishes
Cuisines: German, French
Allergies: Soy Free

---

Case5:
Recipe Name: bacon Fried Rice
ingredient: black pepper, scallions
Diets: paleo
Courses: main dishes, Breakfast
Allergies: Gluten-free
Holidays: halloween, Winter
Cuisines: Kid-friendly, french

---
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

Diets
Paleo
Pescetarian
vegan

Holidays
Christmass
Fall
new Year
Winter
Halloween


Ingredients
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

 It should return
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

It  should return
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


-----

## This is the latest version

Case 1
```
Black Pepper
Mozarella
Potatoes
Apple
water
grapes
sugar
scallions
```
By searching one of this ingredient, server will return at least 2 recipes(Single Ingredient mention).

URL = "black pepper"

Return

---

Case 2
We're using a few ingredients

Apple, Grapes
"apple" "grapes"

will return

URL = "black pepper"

Return
---

Case 3
Simple Attributes.

Diets
```
Lacto vegetarian
Pescetarian
Vegan
```
URL = "black pepper"

Return
///////////

Holidays

```
Christmas
Thanksgiving
Fall
```

URL = "black pepper"

Return
///////////

Cuisines

```
American
Asian
Mexican
```
URL = "black pepper"

Return
///////////
Courses
```
Main Dishes
Desserts
```
URL = "black pepper"

Return
///////////
Allergies
```
attributes by name
Gluten-Free
Peanut-Free
Soy-Free
```

URL = "black pepper"

Return
///////////
