import React from 'react'

export default function Header() {
  return (
    <header className='flex w-full justify-between py-4 px-3'>
        <div>Armor-Tech</div>
        <nav className='w-1/2'>
            <ul className='flex justify-around'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
  )
}
