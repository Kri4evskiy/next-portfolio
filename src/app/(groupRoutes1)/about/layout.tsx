export default function AboutLayout({ children }: { children: React.ReactNode }) {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
			{children}
		</div>
	)
}
