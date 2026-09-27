Подключиться по ssh:
ssh sXXXXXX@helios.cs.ifmo.ru -p 2222

Загрузить страницу лэндинга на Helios:
scp -P 2222 index.html sXXXXXX@helios.cs.ifmo.ru:~/public_html/

Для скачивания файла с сервера Helios на локальную машину:
scp -P 2222 sXXXXXX@helios.cs.ifmo.ru:~/{ФАЙЛ.РАСШИРЕНИЕ} {ФАЙЛ.РАСШИРЕНИЕ}

Загрузить лабу:
scp -P 2222 my-first-lab/* sXXXXXX@helios.cs.ifmo.ru:/home/studs/sXXXXXX/public_html/