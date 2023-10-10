/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
	it('renders a heading', () => {
		render(<Home />)

		const heading = screen.getByRole('img', {
			name: 'Vercel Logo'
		})

		expect(heading).toBeInTheDocument()
	})
})
