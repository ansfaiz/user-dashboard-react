import Card from './card';

function HandleCard({ user }) {
  if (!user) return null;

  return (
    <Card
      name={`${user.name.first} ${user.name.last}`}
      img={user.picture.large}
      address={`${user.location.city}, ${user.location.country}`}
      cell={user.cell}
    />
  );
}

export default HandleCard;