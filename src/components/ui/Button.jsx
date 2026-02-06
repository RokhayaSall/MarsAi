import { Link } from 'react-router-dom';

function ButtonParticipate() {
  return (
    <Link
      className="bg-[#2b71b1] text-white  rounded-4xl p-4 px-8 font-bold text-2xl m-4 cursor-pointer md:p-3 md:px-5 md:text-lg"
      to="/form-director"
    >
      Participer maintenant
    </Link>
  );
}

export default ButtonParticipate;
