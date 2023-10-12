'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'

export default function About() {
	useEffect(() => {
		try {
			const a = fetch('https://api.github.com/repos/vercel/next.js')
				.then(res => res.json())
				.catch(e => console.log(e))
			console.log(a)
		} catch (e) {
			console.log(e)
		}
	}, [])

	return (
		<>
			<div>About</div>
			<Link href="/">Return Home</Link>
		</>
	)
}
