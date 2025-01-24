const { Usuario, Rol } = require("../models/index"); // Importa los modelos 

async function seedData() {
  // // Crear roles
  const seedRoles = async () => {
    await Rol.findOrCreate({ where: { NombreRol: 'Administrador' } });
    await Rol.findOrCreate({ where: { NombreRol: 'Usuario' } });
    console.log('Roles seeded');
};

seedRoles();

  // Crear un usuario
  // const adminUser = await Usuario.create({
  //   Nombre: "Juan",
  //   Apellido: "Pérez",
  //   Correo: "admin@example.com",
  //   ClaveHash: "$2a$12$yE.4qICST06siHijozt7KunXvagCLeVi6bMO3Se6VOq2z5caXD44m", // ¡Encripta esto en producción!
    
  // });

  // Asociar el usuario con el rol de Admin
 // await adminUser.addRol(adminRole);

  console.log("Datos iniciales insertados correctamente.");
}

// Ejecutar la función para insertar datos iniciales
seedData().catch((error) => console.error("Error al insertar datos iniciales:", error));
