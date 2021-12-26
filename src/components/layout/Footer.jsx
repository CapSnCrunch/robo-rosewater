function Footer() {
    const footerYear = new Date().getFullYear()

    return (
        <footer className="footer p-10 bg-zinc-100 text-primary-content footer-center">
            <div>
                <p><strong>Robo Rosewater Masters</strong> {footerYear}</p>
            </div>
        </footer>
    )
}

export default Footer
