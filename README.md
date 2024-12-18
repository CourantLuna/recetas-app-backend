# RecetasApp

Bienvenido al repositorio oficial de **RecetasApp**, una aplicación web diseñada para facilitar la gestión, creación y exploración de recetas de cocina de manera intuitiva y eficiente. Este proyecto es una combinación robusta de tecnologías modernas que conecta un frontend dinámico con un backend escalable para ofrecer una experiencia fluida a los usuarios.

---

## 🥗 **Descripción General**

**RecetasApp** permite a los usuarios:

- Crear y gestionar recetas, asignando ingredientes y cantidades específicas.
- Ajustar dinámicamente las porciones y cantidades de los ingredientes.
- Explorar una amplia variedad de recetas con imágenes, etiquetas, categorías, y más.
- Administrar ingredientes de manera independiente.

La aplicación está desarrollada con un enfoque modular y profesional, utilizando las siguientes tecnologías clave:

- **Frontend**: React con Material-UI para una interfaz moderna y receptiva.
- **Backend**: Node.js con Express, implementando un diseño limpio y organizado.
- **Base de Datos**: SQL Server, conectada mediante Sequelize o Tedious para operaciones precisas y optimizadas.
- **Gestión de Estados y Comunicación**: Axios para la interacción entre el frontend y backend.
- **Gestión de Configuración**: Dotenv para manejar variables de entorno en múltiples ambientes (desarrollo, pruebas, producción).

---

## 🛠 **Estructura del Proyecto**

### **Frontend**
- **Carpeta Principal**: `src`
- **Componentes Clave**:
  - **RecipeCard**: Renderiza tarjetas de recetas individuales con información clave como nombre, tiempo de preparación y puntuación.
  - **DeleteDialog**: Modal de confirmación para eliminar elementos (recetas, ingredientes).
  - **RecipeDialog**: Permite agregar y editar recetas.
  - **SearchBar**: Componente para búsqueda dinámica.
- **Vistas**:
  - **IngredientesView**: Muestra la lista de ingredientes y permite gestionarlos.
  - **RecetasView**: Gestión completa de las recetas con CRUD y detalles.
  - **DetallesReceta**: Muestra detalles y funcionalidades de edición de recetas e ingredientes.

### **Backend**
- **Framework**: Express.js
- **Conexión a la Base de Datos**:
  - Configurada con **Tedious** para conexiones robustas.
  - Uso de Sequelize para manejar modelos y relaciones.
- **Endpoints**:
  - `recetas`: CRUD completo para recetas.
  - `ingredientes`: CRUD completo para ingredientes.
  - `recetaingredientes`: Gestión de la relación receta-ingrediente.
- **Ambientes Configurados**:
  - Desarrollo (`development.env`).
  - Pruebas (`qas.env`).
  - Producción (`production.env`).

### **Base de Datos**
- **Tablas**:
  - `Recetas`: Información de recetas.
  - `Ingredientes`: Lista de ingredientes con unidades de medida.
  - `Receta_Ingredientes`: Relación entre recetas e ingredientes.

---

## ✨ **Principales Funcionalidades**

### **Frontend**
- Visualización de recetas en tarjetas con interacción dinámica.
- CRUD completo de recetas y administración de ingredientes.
- Uso de componentes reutilizables con Material-UI.
- Búsqueda dinámica de recetas desde una barra de búsqueda intuitiva.

### **Backend**
- Endpoints RESTful organizados en rutas y controladores.
- Validación robusta para datos entrantes.
- Optimización de consultas con Sequelize.
- Uso de Tedious para configuraciones avanzadas de base de datos.

---

## 🚀 **Guía de Instalación**

### **Requisitos Previos**
1. Node.js (versión recomendada: 20.17.0).
2. SQL Server.
3. React y npm instalados.

### **Pasos**
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/RecetasApp.git
   cd RecetasApp
   ```

2. Instala las dependencias del backend y frontend:
   ```bash
   npm install
   cd client
   npm install
   ```

3. Configura las variables de entorno (`.env`):
   ```bash
   DB_SERVER=localhost
   DB_DATABASE=recetasdb
   DB_USER=recetas_user
   DB_PASSWORD=tu_contraseña
   ```

4. Corre el backend:
   ```bash
   npm start
   ```

5. Corre el frontend:
   ```bash
   cd client
   npm start
   ```

---

## 🌐 **Endpoints Clave**

### **Recetas**
- `GET /api/recetas`: Obtiene todas las recetas.
- `POST /api/recetas`: Crea una nueva receta.
- `PUT /api/recetas/:id`: Actualiza una receta existente.
- `DELETE /api/recetas/:id`: Elimina una receta.

### **Ingredientes**
- `GET /api/ingredientes`: Lista todos los ingredientes.
- `POST /api/ingredientes`: Agrega un nuevo ingrediente.
- `PUT /api/ingredientes/:id`: Edita un ingrediente.
- `DELETE /api/ingredientes/:id`: Elimina un ingrediente.

### **RecetaIngredientes**
- `POST /api/recetaingredientes`: Añade un ingrediente a una receta.
- `PUT /api/recetaingredientes/:recetaId/:ingredienteId`: Actualiza una relación.
- `DELETE /api/recetaingredientes/:recetaId/:ingredienteId`: Elimina un ingrediente de una receta.

---

## 📝 **Próximos Pasos**

1. Añadir autenticación con JWT.
2. Mejorar la interfaz de búsqueda con filtros avanzados.
3. Implementar un sistema de favoritos para los usuarios.
4. Desplegar la aplicación en una plataforma en la nube.

---

## 📚 **Referencias**

1. Documentación oficial de [React](https://reactjs.org/).
2. Guía completa de [Express](https://expressjs.com/).
3. Tutoriales de configuración de [Tedious](https://tediousjs.github.io/tedious/).
4. [Material-UI](https://mui.com/) para interfaces modernas.

¡Esperamos que disfrutes explorando y usando **RecetasApp**!
