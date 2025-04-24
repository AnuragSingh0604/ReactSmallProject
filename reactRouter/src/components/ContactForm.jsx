const ContactForm = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Name" />
        <br></br>
        <input type="email" placeholder="Email" />
        <br></br>
        <textarea placeholder="message"></textarea>
        <br></br>
        <button type="submit">Submit</button>

      </form>
    </div>
  )
}
export default ContactForm;