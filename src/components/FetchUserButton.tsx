import { Button } from '@mui/material';

type FetchUserButtonProps = {
    onClick: () => void;
    loading: boolean;
};

const FetchUserButton = ({ onClick, loading }: FetchUserButtonProps) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick} disabled={loading}>
        {loading ? 'Loading...' : 'Get user'}
    </Button>
  )
}

export default FetchUserButton