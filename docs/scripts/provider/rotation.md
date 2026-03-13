# rotation
Позволяет добавлять кастомные ротации в модуль **Aura**

## register(name, callback)
Регистрирует ротацию с обработчиком callback<br/>
```lua
rotation.register("Lua Test", function(current, target)
    local delta = rotation.delta(current, target)
    delta.yaw = delta.yaw * 0.1
    delta.pitch = delta.pitch * 0.1
    return delta
end)
```
## delta(angle1, angle2): [angle](../class/angle)
Возвращает разницу между двумя углами поворота