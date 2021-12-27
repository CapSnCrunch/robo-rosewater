function Footer() {
    const footerYear = new Date().getFullYear()

    return (
        <footer className="footer p-10 bg-zinc-100 text-primary-content footer-center">
            <div>
                <p><strong>MTG Neural Net</strong> {footerYear}</p>
            </div>
        </footer>
    )
}

export default Footer
