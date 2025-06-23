import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Snackbar, Alert } from '@mui/material';
import { createCase } from '../services/api'; // Cambiado de createProject a createCase

const CaseForm = () => {
  const [caseData, setCaseData] = useState({
    patientName: '',
    description: '',
    imageUrl: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCaseData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!caseData.patientName || !caseData.description) {
      setSnackbar({ open: true, message: 'El nombre del paciente y la descripción son obligatorios', severity: 'error' });
      return;
    }

    try {
      await createCase(caseData); // Enviar los datos al backend
      setSnackbar({ open: true, message: 'Caso clínico creado exitosamente', severity: 'success' });
      setCaseData({ patientName: '', description: '', status: 'En progreso', imageUrl: '' });
    } catch (error) {
      setSnackbar({ open: true, message: 'Error al crear el caso clínico', severity: 'error' });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Crear Caso Clínico
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre del Paciente"
          name="patientName"
          value={caseData.patientName}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Descripción"
          name="description"
          value={caseData.description}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Estado"
          name="status"
          value={caseData.status}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="URL de la imagen"
          name="imageUrl"
          value={caseData.imageUrl}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Crear Caso Clínico
        </Button>
      </form>

      {/* Snackbar de confirmación */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CaseForm;
