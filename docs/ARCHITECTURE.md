# Arquitectura del Sistema

## Estructura de Directorios

```
src/
├─ app/                # Next.js App Router
├─ components/             # Elementos compartidos
│  ├─ ui/              # Componentes UI con Atomic Design
│  │  ├─ atoms/        # Botones, Inputs (shadcn)
│  │  ├─ molecules/    # Formularios, Cards
│  │  ├─ organisms/    # Widgets complejos
│  │  └─ templates/    # Layouts base
├─ modules/            # Módulos de negocio
│  ├─ auth/            # Autenticación
│  └─ dashboard/       # Dashboard principal
├─ lib/                # Utilidades globales
├─ providers/          # Context providers
├─ stores/             # Zustand stores
└─ types/              # Tipos globales
```

## Separación de Responsabilidades

- **UI (common/ui):** Componentes puros siguiendo Atomic Design + shadcn
- **Lógica de negocio (modules/):** Servicios específicos por dominio
- **Servicios distribuidos:** Cada módulo tiene su propio servicio (auth.service.ts)
- **Estado global (stores/):** Zustand stores por contexto funcional

## Ejemplo de Componente Complejo (Dashboard)

```typescript
// modules/dashboard/components/WidgetGrid.tsx
import { DataTable } from '@/common/ui/organisms'
import { useDashboard } from '../hooks/useDashboard'

export const WidgetGrid = () => {
  const { metrics, loading } = useDashboard()

  return (
    <div className="grid grid-cols-2 gap-4">
      <DataTable
        data={metrics.sales}
        columns={[...]}
        shadcnComponents={{ Table, Pagination }}
      />
    </div>
  )
}
```

## Mecanismos de Consistencia

- Patrón de imports absolutos (@/common/ui/atoms/Button)
- Estructura de módulos auto-contenidos
- Contracts TypeScript en cada módulo (types/\*.d.ts)
- Documentación arquitectural en /docs
- ESLint rules para estructura de imports
- Storybook para UI components
