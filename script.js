const quotes =["«Есть такие люди, к которым просто хочется подойти и поинтересоваться, сложно ли без мозгов жить.»",
" «Многие жалуются на свою внешность, и никто — на мозги.»",
" «Главное — живой жизнью жить, а не по закоулкам памяти шарить.»",
" «Нет толстых женщин, есть маленькая одежда.»",
"«Жить надо так, чтобы тебя помнили и сволочи...»",
"«Женщина, чтобы преуспеть в жизни, должна обладать двумя качествами. Она должна быть достаточно умна для того, чтобы нравиться глупым мужчинам, и достаточно глупа, чтобы нравиться мужчинам умным.»",
"« Если женщина идет с опущенной головой — у нее есть любовник! Если женщина идет с гордо поднятой головой — у нее есть любовник! Если женщина держит голову прямо — у нее есть любовник! И вообще – если у женщины есть голова, то у нее есть любовник!»",
" «Уясните раз и навсегда, что характер вашей женщины — это отражение вашего к ней отношения. Для непонятливых: это не она стерва, это ты мудачьё »",
"«Жизнь слишком коротка, чтобы тратить её на диеты, жадных мужчин и плохое настроение.»",
" «Женщины умирают позже мужчин, потому что вечно опаздывают.»",
" «Женщины и никогда не знает, сколько ей лет. Мужчина, который никогда не помнит дня рождения женщины, но точно знает, сколько ей лет — это ее муж.»",
"«Бог создал женщин красивыми, чтобы их могли любить мужчины, и — глупыми, чтобы они могли любить мужчин.»",
" «Отпускайте идиотов и клоунов из своей жизни. Цирк должен гастролировать.»",
" «Оптимизм — это недостаток информации.»",
" «Есть люди, в которых живет Бог; есть люди, в которых живет Дьявол; а есть люди, в которых живут только глисты.»",
"« Если человек тебе сделал зло — ты дай ему конфетку. Он тебе зло — ты ему конфетку. И так до тех пор, пока у этой твари не разовьётся сахарный диабет.»",
" «Самое трудное я делаю до завтрака. Встаю с постели.»",
" «Лучше быть хорошим человеком, «ругающимся матом», чем тихой, воспитанной тварью.»",
" «Я заметила, что если не кушать хлеб, сахар, жирное мясо, не пить пиво с рыбкой — морда становится меньше, но грустнее.»",
" «Все приятное в этом мире либо вредно, либо аморально, либо ведет к ожирению.»",
" «Всё сбудется, стоит только расхотеть…»",
" «Хрен, положенный на мнение окружающих, обеспечивает спокойную и счастливую жизнь…»",
" «Даже под самым пафосным павлиньим хвостом всегда находится обыкновенная куриная жопа.»",
" «Животных, которых мало, занесли в Красную книгу, а которых много — в Книгу о вкусной и здоровой пище.»",
" «Если женщина говорит мужчине, что он самый умный, значит, она понимает, что второго такого дурака она не найдет.»",
" «Одиночество — это состояние, о котором некому рассказать.»",
" «Если больной очень хочет жить, врачи бессильны.»",
" «Склероз нельзя вылечить, но о нём можно забыть.»",
" «Женщина, конечно, умнее. Вы когда-нибудь слышали о женщине, которая бы потеряла голову только от того, что у мужчины красивые ноги?»",
" «Здоровье — это когда у вас каждый день болит в другом месте.»",
" «Воспоминания — это богатство старости.»"
]

const paragraph = document.querySelector('.par');
const button = document.querySelector('.btn');
button.addEventListener('click', function() {
    
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    paragraph.textContent = randomQuote;
    paragraph.style.display = 'block'
})