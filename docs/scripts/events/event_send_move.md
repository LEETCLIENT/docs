# event_send_move
Вызывается при отправке позиции на сервер
```lua
events.set_callback(event_send_move, function(move)
    -- move.x
    -- move.y
    -- move.z
    -- move.yaw
    -- move.pitch
    -- move.ground
    -- move.apply_position
    -- move.apply_rotation
    -- move.cancel = true
end)
```