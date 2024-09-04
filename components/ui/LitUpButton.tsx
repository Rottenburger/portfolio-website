import React from 'react'

const LitUpButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string; icon: React.ReactNode, position: string;
    handleClick?: () => void; otherClasses?: string;
}) => {
  return (
    <button className="p-[3px] relative" onClick={handleClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className={`flex items-center justify-center px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent ${otherClasses}`}>
        {position === 'left' && <span className="mr-2">{icon}</span>}
        <span>{title}</span>
        {position === 'right' && <span className="ml-2">{icon}</span>}
      </div>
    </button>
  )
}

export default LitUpButton