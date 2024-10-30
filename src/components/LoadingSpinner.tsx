// src/components/LoadingSpinner.tsx
import { CircularProgress, Box } from '@mui/material';

const LoadingSpinner = () => (
  <Box display="flex" justifyContent="center" alignItems="center" style={{ marginTop: '1rem' }}>
    <CircularProgress />
  </Box>
);

export default LoadingSpinner;
