# settings
Библиотека позволяет добавить свои настройки в модуль<br/>
Настройки можно добавлять как в группы так и в сам модуль
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
## group(name)
Создает группу модулей
#### .add({ settings })
Добавляет настройки
#### .enabled(boolean)
Устанавливает чекбокс для группы (если функция не вызвана то чекбокс не добавляется)
# Все настройки кроме `group` имеют метод .register для регистрации настройки в модуль
```lua
-- default settings
local checkbox = setting.checkbox("Test checkbox", false).register()
local mode = setting.mode("Test mode", "mode 1", {"mode 1", "mode 2", "mode 3"}, "mode 2").register()
local slider = setting.slider("Test mode", 3, 0, 6, 0.1).register()
-- group settings
local checkbox2 = setting.checkbox("Test checkbox", false)
local mode2 = setting.mode("Test mode", "mode 1", {"mode 1", "mode 2", "mode 3"}, "mode 2")
local slider2 = setting.slider("Test mode", 3, 0, 6, 0.1)
local group = setting.group("Group").add({ checkbox2, mode2, slider2 })
```