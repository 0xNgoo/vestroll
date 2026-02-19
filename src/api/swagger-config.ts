import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Vestroll API Documentation",
      version: "1.0.0",
      description: "API documentation for the Vestroll project",
    },
    servers: [
      {
        url: "/api",
        description: "Standard API base",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  // Path to the API docs
  apis: ["./src/app/api/**/*.ts"], // Adjust this path if necessary
};

export const swaggerSpec = swaggerJSDoc(options);
