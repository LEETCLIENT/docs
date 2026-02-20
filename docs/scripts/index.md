# Script API

У Leet Client есть мощный API скриптов.

Он даёт возможность делать абсолютно всё что желает пользователь в рамках кода Minecraft, включая создание:
- своих обходов и модулей
- своих режимов ротации или резольверов
- дополнений к функционалу клиента

<!-- ## Подготовка

Запускаем [Visual Studio Code](https://code.visualstudio.com) или любой другой понравившийся редактор кода в папке со скриптами. -->

## Ваш первый скрипт

Создаём в папке скриптов файл, назовите как хотите, тут будем использовать `example.lua`.

Как первый скрипт создадим модуль, который каждую секунду будет писать `Hello, world!` каждую секунду в чат, как своеобразный Hello world мира скриптов.

```lua
module.set("Hello", COMBAT)
```

Используем функцию [set()](./function/set) чтобы зарегистрировать скрипт как модуль, который назовём `Hello`.

Модуль появится в категории `Combat`. Список доступных категорий можно найти здесь: [Category](./class/Category).

### Ивенты

Ивент система максимально проста:
Один ивент - один callback

Например:
```lua
events.set_callback(event_tick, function()
  -- обработка тика
end)
events.set_callback(event_2d, function()
  -- обработка рендера 2д (худ)
end)
```

Для нашей задачи можно использовать 2 способа:
- [Timer](./provider/timer.md) - вычисление времени при помощи нашего API
- [Internal](./provider/internal.md) - получение тиков игрока через саму игру
Мы будем использовать Timer так как он проще для нашей задачи.

Добавим event handler:
```lua
local mytimer = timer.create()
events.set_callback(event_tick, function()
    if mytimer.reached(1000) then -- считаем 1 секунду (1000 мс)
        client.chat('Hello, world!')
        mytimer.reset() -- не забываем сбросить таймер
    end
end)
```

### Результат
```lua
module.set("Hello", COMBAT)

local mytimer = timer.create()
events.set_callback(event_tick, function()
    if mytimer.reached(1000) then -- считаем 1 секунду (1000 мс)
        client.chat('Hello, world!')
        mytimer.reset() -- не забываем сбросить таймер
    end
end)
```
