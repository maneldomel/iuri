import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import { useState } from 'react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const routes = [
    { path: '/', label: 'Home' },
    { path: '/up1bt', label: 'Upsell 1BT' },
    { path: '/up3bt', label: 'Upsell 3BT' },
    { path: '/up6bt', label: 'Upsell 6BT' },
    { path: '/up21', label: 'Upsell 21' },
    { path: '/up23', label: 'Upsell 23' },
    { path: '/up26', label: 'Upsell 26' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-3 bg-[#B80000] text-white rounded-lg shadow-lg hover:bg-[#9a0000] transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 pt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Navigation</h2>
          <ul className="space-y-2">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  to={route.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === route.path
                      ? 'bg-[#B80000] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {route.path === '/' && <Home size={18} />}
                    {route.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
