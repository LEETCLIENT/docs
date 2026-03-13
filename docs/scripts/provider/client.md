# client
Библиотека позволяет взаимодействовать с клиентом

## chat(message)
Отправляет сообщение в чат
## get_server_angle(): [angle](../class/angle)
Возвращает серверный угол поворота (к примеру Aura или Scaffold)
## get_local_angle(): [angle](../class/angle)
Возвращает угол поворота камеры
## set_angle([angle](../class/angle))
Устанавливает серверный угол поворота
## get_uid(): number
Возвращает айди пользователя
## get_role(): string
Возвращает роль пользователя
## get_nickname(): string
Возвращает логин пользователя
## get_user(): table
Возвращает данные о пользователе как таблицу<br/>
uid, nickname, role