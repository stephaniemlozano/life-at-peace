const Footer = () => {
  const copyrightDate = () => {
    return new Date().getFullYear()
  }

  return (
    <div className="footer">
      <small>Copyright © {copyrightDate()} | All rights reserved</small>
    </div>
  )
}

export default Footer