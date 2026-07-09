# Tienda de Ropa - Aplicación React

Aplicación web responsiva para gestión de productos de ropa con funcionalidades de búsqueda, favoritos y bloqueos.

## Características Principales

- ✅ **Búsqueda avanzada**: Busca por nombre, género, color y descripción
- ✅ **Favoritos**: Marca productos como favoritos con persistencia en localStorage
- ✅ **Bloqueos**: Bloquea productos para ocultarlos de la búsqueda
- ✅ **Estadísticas**: Visualiza conteos en tiempo real
- ✅ **Responsivo**: Diseño adaptable a móvil, tablet y escritorio
- ✅ **Indicadores visuales**: Spinner de carga y manejo de errores
- ✅ **Persistencia**: Todos los datos se guardan en localStorage

## Estructura de Componentes

```
src/
├── components/
│   ├── SearchBar.jsx           # Barra de búsqueda
│   ├── ProductList.jsx         # Lista filtrada de productos
│   ├── ProductCard.jsx         # Tarjeta individual de producto
│   ├── FavoritesList.jsx       # Panel de favoritos
│   ├── BlockedList.jsx         # Panel de bloqueados
│   ├── Statistics.jsx          # Panel de estadísticas
│   └── Credits.jsx             # Pie de página con créditos
├── hooks/
│   ├── useLocalStorage.js      # Hook para localStorage persistente
│   └── useFetch.js             # Hook para peticiones a API
├── utils/
│   └── productProcessor.js     # Utilidades de procesamiento de productos
├── App.jsx                      # Componente principal
├── main.jsx                     # Punto de entrada
└── styles.css                   # Estilos globales
```

## Hooks Personalizados

### useLocalStorage
Hook reutilizable para manejar estado con persistencia en localStorage.

```javascript
const [favorites, setFavorites] = useLocalStorage('tienda-ropa-favorites', []);
```

**Características**:
- Inicialización desde localStorage
- Validación de JSON
- Actualización automática de localStorage
- Manejo de errores

### useFetch
Hook reutilizable para peticiones a API con gestión de estado.

```javascript
const { data, loading, error } = useFetch(API_URL);
```

**Características**:
- Carga automática de datos
- Estados de carga y error
- Cleanup de componentes desmontados
- Manejo de cancelación

## Características Técnicas

### Búsqueda Multi-campo
- Título del producto
- Género (hombre/mujer)
- Color detectado automáticamente
- Descripción traducida al español

### Traducción
Descripciones de productos traducidas al español latinoamericano con preservación de características técnicas.

### Detección de Color
Sistema automático que identifica colores de productos:
- Negro, Blanco, Azul, Rojo, Gris, Marrón
- Verde, Púrpura, Rosa, Amarillo, Naranja
- Multicolor para patrones

### Responsividad

**Breakpoints CSS**:
- **Desktop**: 1140px (grid 3 columnas para sidebars)
- **Tablet**: 1024px (grid de 3 columnas colapsado)
- **Móvil**: 768px (grid 1 columna, productos más pequeños)
- **Móvil pequeño**: 480px (layout completamente optimizado)

## Flujo de Datos

1. **Carga inicial**: useFetch obtiene productos de API
2. **Procesamiento**: Cada producto se procesa para obtener color, género y descripción
3. **Filtrado**: ProductList filtra según búsqueda y bloqueos
4. **Persistencia**: useLocalStorage mantiene favoritos y bloqueados
5. **UI**: Componentes se actualizan en tiempo real

## localStorage

**Claves utilizadas**:
- `tienda-ropa-favorites`: Array de IDs de favoritos
- `tienda-ropa-blocked`: Array de IDs de bloqueados

Ambas persisten entre recargas de página y son reutilizables con el hook useLocalStorage.

## Optimizaciones

- Separación clara de componentes
- Hooks reutilizables para lógica común
- CSS responsivo con media queries
- Procesamiento de datos eficiente
- Manejo de errores robusto

## Scripts

```bash
npm install    # Instalar dependencias
npm run dev    # Iniciar servidor de desarrollo
npm run build  # Compilar para producción
npm run preview # Vista previa de producción
```

## Navegadores Soportados

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Licencia

Proyecto educativo - Taller de Desarrollo Web con React
