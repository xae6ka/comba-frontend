export default function Profile() {
  if (localStorage.getItem('password')) {
    return (
      <section>
        <h1>{localStorage.getItem('id')}</h1>
        <span>{localStorage.getItem('login')}</span>

        <p>{localStorage.getItem('email')}</p>
      </section>
    )
  }

  return (
    <section>
      <h1>No Data</h1>
    </section>
  );
}
