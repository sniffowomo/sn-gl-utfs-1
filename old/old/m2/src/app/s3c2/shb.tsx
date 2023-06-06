'use client'

import React, { useEffect, useState } from 'react'

export default function Page() {
	// Set up state for tracking the current width and height of the viewport
	const [screenWidth, setScreenWidth] = useState<number>(0)
	const [screenHeight, setScreenHeight] = useState<number>(0)

	// This function updates the current screen width and height
	const handleResize = () => {
		const newScreenWidth = document.documentElement.clientWidth
		const newScreenHeight = document.documentElement.clientHeight
		setScreenWidth(newScreenWidth)
		setScreenHeight(newScreenHeight)
	}

	useEffect(() => {
		// Update the screen dimensions on every resize event
		window.addEventListener('resize', handleResize)

		// Call handleResize initially to set the initial screen dimensions
		handleResize()

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<div className="Page">
			<header id="title">
				<div className="bg-black text-center text-2xl text-rose-400">
					Screen Width: {screenWidth}px, Screen Height: {screenHeight}px
				</div>
			</header>
		</div>
	)
}
