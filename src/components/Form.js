export const Form = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.currency;
    const [amount, from, , to] = value.split(' ');
    console.log({ amount, from, to });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="currency" placeholder="15 USD in UAH" />
      <button type="submit">Exchanche</button>
    </form>
  );
};
