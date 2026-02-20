# settings
Библиотека позволяет добавить свои настройки в модуль
## checkbox(name, value)
Создает чекбокс со значением `value` по умолчанию
## slider(name, value, min, max, increment = 1)
Создает слайдер, аргумент increment может не указываться (1 по умолчанию)
## mode(name, value, values)
Создает выбор режима
```lua
local mode = settings.mode("example", "mode1", {"mode 1", "mode 2", "mode 3"})
```
## range(name, value_min, value_max, min, max, increment = 1)
Создает ренж, аргумент increment может не указываться (1 по умолчанию)