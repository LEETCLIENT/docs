# enum Hooks

```ts
declare enum Hooks{ELYTRA_RESOLVER, AURA_ATTACK, AURA_POINT, AURA_ANGLE, }
```

Тип хука.

- ELYTRA_RESOLVER - `(Entity) => Vec3` - получает аим поинт для ElytraAura
- AURA_ATTACK - `(Entity) => boolean` - проверяет условия для атаки Aura
- AURA_POINT - `(Entity) => Vec3` - получает аим поинт для Aura
- AURA_ANGLE - `(targetAngle: Angle) => Angle` - получает ротацию для Aura