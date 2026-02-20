# event_elytra_point
Вызывается при расчете точки наводки (prediction) в модуле `Elytra Aura`<br/>
[Entity](https://maven.fabricmc.net/docs/yarn-1.21.8+build.1/net/minecraft/entity/Entity.html)<br/>
[vector3](../class/vector3.md)
```lua
events.set_callback(event_elytra_point, function(e)
    -- e.entity: Entity
    -- e.point: vector3
end)
```