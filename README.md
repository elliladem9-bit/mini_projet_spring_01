# Gestion des Vols (Angular)

Même architecture que le projet « Gestion Adhérents » : application Angular standalone sans backend.

- `services/vol.service.ts` : données en mémoire (vols + types de vol)
- `services/auth.ts` : authentification simple (tableau `users`, `localStorage`)
- `guard-vol/vol.guard.ts` : réserve l'ajout de vol au rôle ADMIN (sinon `/app-forbidden`)
- `login/`, `forbidden/` : pages de connexion et d'accès refusé

Comptes : `Admin / 1234` (ADMIN) et `Aya / 1234` (USER).

```
npm install
npm start
```
