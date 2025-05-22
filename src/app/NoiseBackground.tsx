export default function NoiseBackground() {
    return (
        <div
            className="fixed inset-0 z-[-1] opacity-10 pointer-events-none"
            style={{
                backgroundImage: `url('/NoiseBg/noise-bg5.jpg')`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto'
            }}
        />
    )
}