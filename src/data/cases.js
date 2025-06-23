const cases = [
  {
    id: 1,
    patientName: "Juan Pérez",
    mainImage: "/assets/juan_perez.png",
    description:
      "Paciente con diagnóstico de diabetes tipo 2, en tratamiento y control constante, puede disfrutar de su vida gracias a nuestros cuidados.",
    sections: [
      {
        id: 1,
        title: "Diagnóstico Inicial",
        imageUrl: "/assets/hepatitis_juan.png",
        text: "El paciente fue diagnosticado con diabetes tipo 2 en 2020. Desde entonces, ha seguido un régimen de medicación y cambios en su estilo de vida.",
      },
      {
        id: 2,
        title: "Tratamiento Actual",
        imageUrl: "/assets/tratamiento_juan.png",
        text: "Se ha implementado una dieta balanceada y ejercicios regulares, junto con medicación prescrita por el endocrinólogo.",
      },
    ],
  },
  {
    id: 2,
    patientName: "María Gómez",
    mainImage: "/assets/maria.png",
    description: "Paciente con hipertensión arterial, bajo seguimiento médico, puede disfrutar de su vida gracias a nuestros cuidados.",
    status: "Completado",
    sections: [
      {
        id: 1,
        title: "Historia Clínica",
        imageUrl: "/assets/hepatitis_juan.png",
        text: "Diagnóstico de hipertensión en 2018. Se monitorizan regularmente sus niveles de presión arterial.",
      },
      {
        id: 2,
        title: "Intervenciones",
        imageUrl: "/assets/tratamiento_juan.png",
        text: "Se ajustó la medicación y se aconsejó reducción del consumo de sal y aumento de actividad física.",
      },
    ],
  },
  {
    id: 3,
    patientName: "Carlos Rodríguez",
    mainImage: "/assets/carlos.png",
    description: "Caso de recuperación postquirúrgica tras cirugía de rodilla, puede disfrutar de su vida gracias a nuestros cuidados.",
    status: "En progreso",
    sections: [
      {
        id: 1,
        title: "Procedimiento Quirúrgico",
        imageUrl: "/assets/hepatitis_juan.png",
        text: "Cirugía artroscópica realizada en marzo de 2024 con éxito.",
      },
      {
        id: 2,
        title: "Rehabilitación",
        imageUrl: "/assets/tratamiento_juan.png",
        text: "Sesiones de fisioterapia programadas para fortalecer la rodilla y recuperar movilidad.",
      },
    ],
  },
];

export default cases;
