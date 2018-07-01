Search form tests




---
Attributes that have one or more results


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
