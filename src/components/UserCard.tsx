import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import {UserData} from "../utils/UserData "
import { Phone, Email, LocationOn, Person, Cake, Home } from '@mui/icons-material';

type UserCardProps = {
    user: UserData;
};


const UserCard = ({ user }: UserCardProps) => {
  return (
    <Card style={{ 
        margin: '1rem 0', 
        padding: '1rem', 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 30%, #c3cfe2 100%)',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', 
    }}>
        <Avatar alt="User Picture" src={user.picture.large} style={{ margin: '0 auto', width: 80, height: 80 }} />
        <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                {user.name.first} {user.name.last}
            </Typography>
            <Box display="flex" alignItems="left" justifyContent="center" gap={1} mt={1}>
                <Person fontSize="small" sx={{ color: '#666' }} />
                <Typography variant="body2" color="textSecondary">
                    Gender: {user.gender}
                </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                <Cake fontSize="small" sx={{ color: '#666' }} />
                <Typography variant="body2" color="textSecondary">
                    Age: {user.registered.age}
                </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
            <Phone fontSize="small" sx={{ color: '#666' }} />
                <Typography variant="body2" color="textSecondary">
                    {user.phone}
                </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
            <Email fontSize="small" sx={{ color: '#666' }} />
                <Typography variant="body2" color="textSecondary">
                    {user.email}
                </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                <LocationOn fontSize="small" sx={{ color: '#666' }} />
                <Typography variant="body2" color="textSecondary">
                    {user.location.city}, {user.location.country}, {user.location.postcode}
                </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                <Home fontSize="small" sx={{ color: '#666' }} />
                <Typography variant="body2" color="textSecondary">
                    {user.location.street.number} {user.location.street.name}
                </Typography>
            </Box>
        </CardContent>
    </Card>
  )
}

export default UserCard