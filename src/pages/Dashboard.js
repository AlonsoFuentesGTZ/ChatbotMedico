import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  Button,
  Stack,
} from '@mui/material';
import { getCases } from '../services/api';  // Cambié getProjects por getCases
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Dashboard = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Todos');

  useEffect(() => {
    getCases()
      .then((res) => {
        setCases(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const total = cases.length;
  const completados = cases.filter(c => c.status === 'Completado').length;
  const enProgreso = cases.filter(c => c.status === 'En progreso').length;

  const filteredCases = cases.filter((c) => {
    if (filter === 'Todos') return true;
    return c.status === filter;
  });

  const stats = [
    {
      label: 'Total de Casos Clínicos',
      value: total,
      icon: <AssignmentIcon fontSize="large" />,
    },
    {
      label: 'Casos en Progreso',
      value: enProgreso,
      icon: <WorkIcon color="warning" fontSize="large" />,
    },
    {
      label: 'Casos Completados',
      value: completados,
      icon: <CheckCircleIcon color="success" fontSize="large" />,
    },
  ];

  if (loading) {
    return <CircularProgress sx={{ display: 'block', margin: '40px auto' }} />;
  }

  return (
    <Layout>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard de Casos Clínicos
        </Typography>

        {/* Estadísticas */}
        <Grid container spacing={3}>
          {stats.map((stat, idx) => (
            <Grid item xs={12} sm={4} key={idx}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  {stat.icon}
                  <Typography variant="h5" sx={{ mt: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography color="textSecondary">{stat.label}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Filtros */}
        <Typography variant="h6" sx={{ mt: 4 }}>
          Filtrar por estado:
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 3 }}>
          {['Todos', 'En progreso', 'Completado'].map((estado) => (
            <Button
              key={estado}
              variant={filter === estado ? 'contained' : 'outlined'}
              onClick={() => setFilter(estado)}
            >
              {estado}
            </Button>
          ))}
        </Stack>

        {/* Lista filtrada */}
        <Grid container spacing={3}>
          {filteredCases.map((c) => (
            <Grid item key={c._id} xs={12} sm={6} md={4}>
              <Card>
                {c.imageUrl && (
                  <img
                    src={`http://localhost:3001${c.imageUrl}`}
                    alt={c.patientName || 'Caso clínico'}
                    height="200"
                    style={{ objectFit: 'cover', width: '100%' }}
                  />
                )}
                <CardContent>
                  <Typography variant="h6">{c.patientName || 'Nombre del paciente'}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {c.description}
                  </Typography>
                  <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                    Estado: {c.status}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Dashboard;
