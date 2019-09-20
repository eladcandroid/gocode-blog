---
slug: tip-json-storage-server
author: אלעד כהן
title: טיפ להמונים - JSON Box - שרת JSON ללא שרת
date: 2019-09-20
published: true
tags: ['Tips', 'Tip', 'CSS', 'JSON Storage', 'JSON', '']
image: ./images/tip-json-storage-server.jpg
canonical_url: false
description: "איך מרימים שרת JSON זמין לפני שסיימנו להכין חביתה"

---
 לפעמים קורה בפיתוח צד קליינט שאנו צריכים צד שרת קטנטנן שיהיה זמין עבורנו באופן מיידי, בלי להתחיל להתעסק בכתיבת צד שרת.

הנה רפוזיטורי קטנטן בגיטהאב שעושה בשבילנו בדיוק את זה ועם מידע שנשמר כ JSON. לא פחות ולא יותר, ובצורה הכי פשוטה שיש.

כנסו לכאן:
https://jsonbox.io/

ותקבלו כתובת ייחודית עבורכם של שרת איתו תוכלו להתחיל לעבוד.

שימו לב שהכתובת מתחלפת בכל ריפרוש של הדף אז פשוט קחו אחת והעתיקו אותה הצידה.

ומעכשיו, כל פקודות ה REST הנפוצות יהיו זמינות עבורכם...

אפשר כמובן להשתמש ב curl או ב POSTMAN אם תרצו משהו קצת יותר נוח, או אפילו בכלי האונליין המקסים הבא, העונה לשם המדהים POSTWOMAN 👩
https://postwoman.io/

## קריאת מידע
פעולת GET פשוטה וברורה:
```
curl -X GET 'https://jsonbox.io/${BOX_ID}'
```

כש ${BOX_ID} הוא כמובן המחרוזת הייחודית שקיבלתם מהאתר.

## שמירת מידע
כנ״ל לגבי POST:
```
curl -X POST 'https://jsonbox.io/${BOX_ID}' \
    -H 'content-type: application/json' \
    -d '{"name": "Shuki Muki", "age": 15}'
```
ב POSTMAN/WOMAN לא לשכוח לקבוע Header ולהכניס את גוף המידע במקום המתאים.

אפשר גם להוסיף מידע כמערך של רשומות:
```
curl -X POST 'https://jsonbox.io/${BOX_ID}' \
    -H 'content-type: application/json' \
    -d '[{"name": "Shuki Muki", "age": 52}, {"name": "Tuki Puki", "age": 11}]'
```

# קריאת מידע בתוספת שאילתה/מיון
JSON Box מאפשר לכם גם לבצע שאילתות על המידע, לפי ואפילו מיון

לדוגמא - שליפת מידע אחרי מיון בסדר יורד עפ״י מאפיין age:
```
curl -X GET 'https://jsonbox.io/${BOX_ID}?sort=-age'
```

פילטור כל הרשומות עם name: puki
```
curl -X GET 'https://jsonbox.io/${BOX_ID}?q=name:puki'
```

ועוד ועוד... להמשך היכרות פשוט כנסו לרפוזיטורי עצמו
https://github.com/vasanthv/jsonbox

שימו לב שיש מעטפת ל Node לעצלנים במיוחד שקשה להם לכתוב כמה פקודות axios:
https://www.npmjs.com/package/jsonbox-node

# למי זה מומלץ ולמי לא ממש?
פרויקטים קטנים, POC, האקתונים, לייב קודינג, ראיונות עבודה - כמו כפפה ליד. 

לא הייתי רץ לשמור שם נתוני משתמשים או מיקומים של בסיסי צה״ל... 😅

וכמו תמיד - תהנו וספרו חוויות!

Photo by Megha Mangal from [Pexels](https://www.pexels.com/photo/fried-egg-with-seasonings-722223/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)
