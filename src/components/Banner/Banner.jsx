
const Banner = () => {
    return (
        <div>
            <section className="relative bg-cover bg-center h-screen rounded-3xl" style={{backgroundImage: "url('https://i.ibb.co/M6PdSbN/image.jpg')"}}>
      <div className="absolute inset-0"></div>
      <div className="h-full flex flex-col justify-center items-center">
        <h2 className="text-6xl font-bold text-white mb-4">Discover an exceptional cooking </h2>
        <h2 className="text-5xl font-bold text-white mb-4">class tailored for you!</h2>
        <p className="text-2xl m-6 text-center text-white mb-8">Unleash your culinary potential with our personalized cooking classes, where you'll learn from <br /> expert chefs and elevate your skills to new heights.</p>
        <div className="flex gap-6 mt-20">
            <button className="btn btn-success">Explore Now</button>
            <button className="btn glass">Our Feedback</button>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Banner;