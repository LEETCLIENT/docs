# event_input
Вызывается при обработке нажатых клавиш (каждый тик)

```lua
events.set_callback(event_input, function(e)
    -- e.forward
    -- e.strafe
    -- e.jump
    -- e.sneak
    -- e.sprint
end)
```