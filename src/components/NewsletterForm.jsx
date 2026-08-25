import '../styles/NewsletterForm.css'

function NewsletterForm() {
    return (
        <form action="/subscribe" method="POST">
            <input
                type="email"
                id="email"
                name="email"
                placeholder="feed your email to our newsletter"
                required
            />
        </form>
    )
}

export default NewsletterForm
