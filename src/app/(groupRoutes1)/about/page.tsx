'use client'

import Link from 'next/link'
import React, { FormEvent } from 'react'

export default function About() {
	const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
		const res = await fetch('http://localhost:3000/api/about', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ a: 'asdasd', b: 'dsfsdfgfg' })
		}).then(res => res.json())

		console.log('res: ', res)
	}
	return (
		<>
			<div>About</div>
			<Link href="/">Return Home</Link>
			<button type="submit" onClick={handleSubmit}>
				asdasdasd
			</button>
		</>
	)
}
