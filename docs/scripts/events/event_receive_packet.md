# event_receive_packet
Вызывается при получении пакета <br/>
[Packets](https://maven.fabricmc.net/docs/yarn-1.21.8+build.1/net/minecraft/network/packet/PlayPackets.html)<br/>

```lua
events.set_callback(event_receive_packet, function(e)
    -- e.packet: Packet
    -- e.name: string
end)
```