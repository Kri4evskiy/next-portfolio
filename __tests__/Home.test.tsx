/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
	it('renders a heading and "Docs" text', () => {
		render(<Home />)
		const heading = screen.getByRole('img', { name: 'Vercel Logo' })
		const element = screen.getByText('Docs')

		expect(heading).toBeInTheDocument()
		expect(element).toBeInTheDocument()
	})
})


