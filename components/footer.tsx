import Link from "next/link"
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';

export function Footer() {
  return (
    <footer className="text-white py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo/Text */}
        <div>
          <h2 className="text-lg md:text-2xl font-bold tracking-wider">
            PLAYER PUMP PLAYER
          </h2>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <Link 
            href="https://t.me/yourgroup" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <XIcon className="w-6 h-6" />
          </Link>
          <Link 
            href="https://twitter.com/yourhandle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <TelegramIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

