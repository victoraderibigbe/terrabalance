const NewsLetterForm = () => {
  return (
    <form>
      <h4 className="">Sign up for our newsletter</h4>
      <p className="my-2">Stay updated with the latest trends and news.</p>
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="email"
          placeholder="Your Email Address"
          required
          className="border-primaryBrown focus:ring-0 focus:border-foreground rounded-lg"
        />
        <button
          type="submit"
          className="bg-primaryBrown p-2 rounded-lg text-neutralLight"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default NewsLetterForm;
