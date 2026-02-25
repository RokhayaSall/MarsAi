import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function ProfileConnect({ onClick }) {
  const { user } = useContext(AuthContext);

  const roles = user?.roles || [];
  const destination = !user
    ? '/auth'
    : roles.includes('Admin')
      ? '/admin'
      : roles.includes('Jury')
        ? '/dashboard/jury'
        : '/';

  const label = !user ? 'Page de connexion' : 'Tableau de bord';

  return (
    <Link to={destination} aria-label={label}>
      <CgProfile className="text-[#2b71b1] w-11 h-11" onClick={onClick} />
    </Link>
  );
}
