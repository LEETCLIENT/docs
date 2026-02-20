# event_boost
Вызывается при расчете скорости ускорения от фейерверка

```lua
events.set_callback(event_boost, function(e)
    -- e.yaw
    -- e.pitch
    -- e.horizontal
    -- e.vertical
end)
```