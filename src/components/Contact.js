const Contact = () => {
  return (
    <div className='contact'>
      <h3>Dania Beach, FL 33004</h3>
      <p>
        Call: <a href='tel:+9542131158'>(954)213-1158</a> or{' '}
        <a href='mailto:lifeatpeacetherapy@gmail.com'>Email Me</a>
      </p>
      <br />

      <form>
        <label>
          First Name:
          <input type='text' name='name' placeholder='Your First Name' />
        </label>
        <br />
        <label>
          Last Name:
          <input type='text' name='name' placeholder='Your Last Name' />
        </label>
        <br />
        <label>
          Email:
          <input type='text' name='email' placeholder='Your Email' />
        </label>
        <br />
        <label>
          Your Message:
          <input
            type='text'
            name='name'
            placeholder='Enter your message here.'
          />
        </label>
        <br />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Contact
