import Link from 'next/link';

export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup', className: 'nav-link nav-link-primary' },
    !currentUser && { label: 'Sign In', href: '/auth/signin', className: 'nav-link' },
    currentUser && { label: 'Sign Out', href: '/auth/signout', className: 'nav-link'  }
  ]
    .filter(linkConfig => linkConfig)
    .map(({ label, href, className }) => {
      return (
        <li key={href} className="nav-item">
          <Link href={href}>
            <a className={className}>{label}</a>
          </Link>
        </li>
      );
    });
    
  return (
     <nav className="navbar navbar-light bg-light">
      <div className="container">
         <Link href="/">
            <a className="navbar-brand">◻️ Ticketit</a>
         </Link>

         <div className="d-flex justify-content-end">
            <ul className="nav d-flex align-items-center ">{links}</ul>
         </div>
            </div>
         </nav>
  );
};
