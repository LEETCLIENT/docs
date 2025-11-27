# Hook (HookProvider)

```ts
declare interface HookProvider {
    hook(hook: Hooks.ELYTRA_RESOLVER | Hooks.AURA_POINT, solution: (target: Entity) => Vec3): void
    hook(hook: Hooks.AURA_ATTACK, solution: (target: Entity) => boolean): void
    hook(other: string, solution: (idk: any) => any): void
}
declare const Hook: HookProvider;
```

## hook([hookType](/scripts/class/Hooks), solution)

hookType:
- ELYTRA_RESOLVER - `(Entity) => Vec3` - получает аим поинт для ElytraAura
- AURA_ATTACK - `(Entity) => boolean` - проверяет условия для атаки Aura
- AURA_POINT - `(Entity) => Vec3` - получает аим поинт для Aura
- AURA_ANGLE - `(targetAngle: Angle) => Angle` - получает ротацию для Aura