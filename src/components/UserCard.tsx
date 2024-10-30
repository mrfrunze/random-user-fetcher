import { Card, CardContent, Typography, Avatar } from '@mui/material';

type UserData = {
    name: { first: string; last: string };
    email: string;
    picture: { large: string };
    location: {
        city: string;
        country: string;
    };
};

type UserCardProps = {
    user: UserData;
};


const UserCard = ({ user }: UserCardProps) => {
  return (
    <Card style={{ margin: '1rem 0', padding: '1rem', textAlign: 'center' }}>
        <Avatar alt="User Picture" src={user.picture.large} style={{ margin: '0 auto', width: 80, height: 80 }} />
        <CardContent>
            <Typography variant="h6">
                {user.name.first} {user.name.last}
            </Typography>
            <Typography variant="body2" color="textSecondary">
                {user.location.city}, {user.location.country}
            </Typography>
            <Typography variant="body2" color="textSecondary">
                {user.email}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default UserCard